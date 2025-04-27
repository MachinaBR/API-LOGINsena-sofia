const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 10000;

// Middleware
app.use(express.json());

// Rutas de servicios existentes
const postsRoute = require('./routes/post');
app.use('/servicios', postsRoute);

// NUEVAS RUTAS DE AUTENTICACIÓN
const authRoute = require('./routes/Auth');
app.use('/auth', authRoute);

const productosRoute = require('./routes/productos');
const categoriasRoute = require('./routes/categorias');

app.use('/productos', productosRoute);
app.use('/categorias', categoriasRoute);

// Conexión a MongoDB Atlas
mongoose.connect(
  'mongodb+srv://admin:admin123@cluster0.tx0rsxk.mongodb.net/restapi_db?retryWrites=true&w=majority&appName=Cluster0',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('✅ Conexión exitosa a MongoDB Atlas'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando en la ruta principal!');
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
