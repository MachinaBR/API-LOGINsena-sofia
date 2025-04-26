const mongoose = require('mongoose');

// Definimos el esquema del Post
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

// Exportamos el modelo para usarlo en otros archivos
module.exports = mongoose.model('Post', PostSchema);