const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes'); // 👈 Importamos la nueva ruta

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); // 👈 Conectamos la ruta protegida

module.exports = app;