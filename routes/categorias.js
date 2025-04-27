const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Crear una nueva categoría
router.post('/', async (req, res) => {
  const { nombre } = req.body;

  const nuevaCategoria = new Category({ nombre });

  try {
    const categoriaGuardada = await nuevaCategoria.save();
    res.json(categoriaGuardada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtener todas las categorías
router.get('/', async (req, res) => {
  try {
    const categorias = await Category.find();
    res.json(categorias);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;