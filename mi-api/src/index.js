const express = require('express');
const app = express();
const PORT = 3000;

const userRoutes = require('./routes/userRoutes');

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Rutas
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
