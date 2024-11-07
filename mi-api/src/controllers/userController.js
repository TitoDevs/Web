const User = require('../models/userModel');

// Lista inicial de usuarios (puede ser vacía o predefinida)
let users = [
    new User(1, 'Juan Pérez', 'juan.perez@example.com', 28),
    new User(2, 'María López', 'maria.lopez@example.com', 34)
];

// Obtener todos los usuarios
const getAllUsers = (req, res) => {
    res.json(users);
};

// Obtener un usuario por su ID
const getUserById = (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ message: 'El ID es requerido para buscar un usuario.' });
    }

    const user = users.find(user => user.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.json(user);
};

// Agregar un nuevo usuario mediante parámetros de la URL
const addUserByQuery = (req, res) => {
    const { id, name, email, age } = req.query;

    if (!id || !name || !email || !age) {
        return res.status(400).json({ message: 'Todos los campos (id, name, email, age) son requeridos.' });
    }

    // Convertir id y age a enteros
    const newUser = new User(parseInt(id), name, email, parseInt(age));
    users.push(newUser);
    res.json({ message: 'Usuario agregado', users });
};

// Modificar un usuario mediante parámetros de la URL
const updateUserByQuery = (req, res) => {
    const { id, name, email, age } = req.query;

    if (!id) {
        return res.status(400).json({ message: 'El ID es requerido para actualizar un usuario.' });
    }

    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    // Actualizar los valores si se proporcionan
    if (name) users[userIndex].name = name;
    if (email) users[userIndex].email = email;
    if (age) users[userIndex].age = parseInt(age);

    res.json({ message: 'Usuario actualizado', user: users[userIndex] });
};

// Eliminar un usuario mediante parámetros de la URL
const deleteUserByQuery = (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ message: 'El ID es requerido para eliminar un usuario.' });
    }

    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    const deletedUser = users.splice(userIndex, 1);
    res.json({ message: 'Usuario eliminado', user: deletedUser[0] });
};

module.exports = {
    getAllUsers,
    getUserById,
    addUserByQuery,
    updateUserByQuery,
    deleteUserByQuery
};
