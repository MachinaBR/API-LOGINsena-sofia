API REST desarrollada con Node.js, Express y MongoDB Atlas

Instalación y uso

Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd mi-rest-api

Instalar dependencias
npm install

Configurar conexión a la base de datos
Abrir el archivo app.js
Reemplazar la URL de conexión a MongoDB Atlas con tus credenciales

Iniciar el servidor
npm start
El servidor escuchará en http://localhost:10000

Endpoints disponibles

Registro de usuario (POST) /auth/register
Enviar usuario y contraseña en formato JSON
Respuesta: mensaje de éxito o error

Inicio de sesión (POST) /auth/login
Enviar usuario y contraseña en formato JSON
Respuesta: autenticación satisfactoria o mensaje de credenciales incorrectas

Creación de servicios (POST) /servicios
Enviar título y contenido en formato JSON
Respuesta: objeto creado con su identificador

Listado de servicios (GET) /servicios
Obtiene un array con todos los servicios en JSON

Para probar usar Postman o curl apuntando a los endpoints descritos
