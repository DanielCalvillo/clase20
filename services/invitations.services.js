const sequelize = require('../db/conection');

module.exports.listarInvitations = async () => {
  try {
    let resultado = await sequelize.query('SELECT * FROM invitations')
    return resultado
  } catch (err) {
    console.log(error)
    throw new Error ('Ocurrió un error en la consulta de invitaciones')
  }
}

module.exports.crearInvitation = async (invitation) => {
  let newInvitation = [
    invitation.id,
    invitation.sender,
    invitation.receiver
  ]
  console.log(newInvitation)
  try {
    let resultado = await sequelize.query(`INSERT INTO invitations (id, sender, receiver) VALUES (?, ?, ?)`,
    {replacements: newInvitation, type: sequelize.QueryTypes.SELECT});
    console.log(resultado)
    return resultado
  } catch(err) {
    console.log(err)
    throw new Error('Ocurrio un error en la creación de usuario')
  }
}