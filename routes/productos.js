const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Crear un nuevo producto
router.post('/', async (req, res) => {
  const { nombre, precio, cantidad, categoria } = req.body;

  const nuevoProducto = new Product({
    nombre,
    precio,
    cantidad,
    categoria
  });

  try {
    const productoGuardado = await nuevoProducto.save();
    res.json(productoGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Actualizar un producto por ID
router.put('/:id', async (req, res) => {
    const { nombre, precio, cantidad, categoria } = req.body;
  
    try {
      const productoActualizado = await Product.findByIdAndUpdate(
        req.params.id,
        { nombre, precio, cantidad, categoria },
        { new: true }
      );
      res.json(productoActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  // Eliminar un producto por ID
router.delete('/:id', async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

module.exports = router;