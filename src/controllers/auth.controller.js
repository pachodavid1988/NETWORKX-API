const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registrar usuario
const register = async (req, res) => {
  try {
    // 👇 Aquí imprimimos el body recibido
    console.log("📩 req.body:", req.body);

    const { name, email, password } = req.body;

    // Validar si ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear usuario
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ msg: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor', error: error.message });
  }
};

// Login usuario
const login = async (req, res) => {
  try {
    console.log("📩 req.body:", req.body); // 👈 también aquí

    const { email, password } = req.body;

    // Buscar usuario
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Usuario no encontrado' });
    }

    // Comparar contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Contraseña incorrecta' });
    }

    // Crear token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ msg: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor', error: error.message });
  }
};

module.exports = { register, login };