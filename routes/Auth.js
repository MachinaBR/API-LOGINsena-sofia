const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// POST /auth/register
// Registra un nuevo usuario. Hashea la contraseña antes de guardar.
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    if (await User.findOne({ username })) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Generar hash de la contraseña
    const hash = await bcrypt.hash(password, 10);
    // Crear y guardar el usuario
    const newUser = new User({ username, password: hash });
    await newUser.save();

    res.status(201).json({ message: 'Registro exitoso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /auth/login
// Autentica un usuario existente comparando el hash.
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar usuario en la base de datos
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Comparar la contraseña con el hash
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });
    }

    res.json({ message: 'Autenticación satisfactoria' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
