const express = require('express');
const app = express();
const PORT = 10000;

// Middleware
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin123@cluster0.tx0rsxk.mongodb.net/restapi_db?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conexión exitosa a MongoDB Atlas'))
.catch((error) => console.error('❌ Error al conectar a MongoDB:', error));


// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando en la ruta principal!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
