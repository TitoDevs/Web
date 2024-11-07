const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, addUserByQuery, updateUserByQuery, deleteUserByQuery } = require('../controllers/userController');

// Rutas de usuarios
router.get('/', getAllUsers); // Leer todos los usuarios
router.get('/add', addUserByQuery); // Agregar un nuevo usuario mediante parámetros de la URL
router.get('/update', updateUserByQuery); // Modificar un usuario mediante parámetros de la URL
router.get('/delete', deleteUserByQuery); // Eliminar un usuario mediante parámetros de la 
router.get('/get', getUserById); // Obtener un usuario por ID

module.exports = router;