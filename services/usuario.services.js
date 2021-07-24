const sequelize = require('../db/conection');

module.exports.listarUsuarios = async () => {
  try {
    let resultado = await sequelize.query('SELECT * FROM Users')
    return resultado
  } catch (err) {
    console.log(error)
    throw new Error ('Ocurrio un error en la consulta de usuarios')
  }
}

module.exports.crearUsuario = async (user) => {
  let newUser = [
    user.id,
    user.name
  ]
  console.log(newUser)
  try {
    let resultado = await sequelize.query(`INSERT INTO Users (id, name) VALUES (?, ?)`,
    {replacements: newUser, type: sequelize.QueryTypes.SELECT});
    console.log(resultado)
    return resultado
  } catch(err) {
    console.log(err)
    throw new Error('Ocurrio un error en la creación de usuario')
  }
}
