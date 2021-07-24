// Importarmos los modulos requeridos
require('dotenv').config()
var express = require('express');
var app = express()
const sequelize = require('./db/conection')
const usuariosRoutes = require('./routes/usuario.routes')
const invitationsRoutes = require('./routes/invitations.routes')

//Middlewares globales
app.use(express.json())

//iniciamos nuestro servidor

async function inicioServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente');
    app.listen(process.env.PORT, function () {
      console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
    })
  } catch (err) {
    console.error('No se pudo conectar con la Base de datos: ', error)
  }
}

inicioServer()

//Routes
usuariosRoutes(app);
invitationsRoutes(app)