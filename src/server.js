// Importamos las librerías necesarias
const express = require('express');
const dotenv = require('dotenv');

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

const connectDB = require('./db'); // 👈 Importar después de dotenv.config()

// Conectamos a la base de datos
connectDB();

// Creamos la aplicación usando express
const app = require('./app');

// Definimos el puerto
const PORT = process.env.PORT || 4000;

// Ponemos el servidor a escuchar en el puerto
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`✅ MongoDB conectado correctamente`);
  console.log(`🔑 JWT_SECRET: ${process.env.JWT_SECRET ? 'Cargado' : 'No definido'}`);
});