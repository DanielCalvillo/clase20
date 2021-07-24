const invitationService = require('../services/invitations.services');

module.exports = (app) => {
  app.get('/invitations', async (req, res) => {
    try {
      let resultado = await invitationService.listarInvitations()
      res.status(200).json({ message: "Datos recuperados exitosamente", resultado})
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  })
  app.post('/invitations', async (req, res) => {
    try {
      let invitation = req.body
      let resultado = invitationService.crearInvitation(invitation)
      res.status(200).json({ message: "Invitación creada exitosamente", resultado})
    } catch(err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  })
}