// Importamos la librería express
const express = require('express');

// Creamos un "router" que manejará las rutas
const router = express.Router();

// Importamos las funciones de autenticación (register y login)
const { register, login } = require('../controllers/auth.controller');

// Definimos la ruta para registrar usuarios
// Cuando alguien haga POST a /api/auth/register, se ejecutará la función register
router.post('/register', register);

// Definimos la ruta para iniciar sesión
// Cuando alguien haga POST a /api/auth/login, se ejecutará la función login
router.post('/login', login);

// Exportamos el router para que pueda usarse en app.js
module.exports = router;