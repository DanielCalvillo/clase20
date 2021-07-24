const userServices = require('../services/usuario.services')

module.exports = (app) => {
  app.get('/usuarios', async (req, res) => {
    try {
      let resultado = await userServices.listarUsuarios()
      res.status(200).json({ message: "Datos recuperados exitosamente", resultado})
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  })
}

module.exports = (app) => {
  app.post('/usuarios', async (req, res) => {
    try {
      let newUser = req.body
      let resultado = await userServices.crearUsuario(newUser)
      res.status(200).json({ message: "Usuario creado exitosamente", resultado})
    } catch(err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  })
}