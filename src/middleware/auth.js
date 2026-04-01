const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ msg: 'No hay token, autorización denegada' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // 👈 MUY IMPORTANTE
  } catch (error) {
    res.status(401).json({ msg: 'Token inválido' });
  }
}

module.exports = auth; // 👈 Exporta la función, no un objeto