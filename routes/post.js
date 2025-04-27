const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Ruta para crear un nuevo post
router.post('/', async (req, res) => {
    const { title, content } = req.body;

    const post = new Post({ title, content });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para obtener todos los posts
router.get('/', async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;