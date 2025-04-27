const mongoose = require('mongoose');

/**
 * Esquema de usuario:
 * - username: único y requerido
 * - password: hash de bcrypt, requerido
 */
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Exportamos el modelo “User”
module.exports = mongoose.model('User', userSchema);
