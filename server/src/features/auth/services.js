const db = require('../../_db/models');

module.exports = {
  // Pesquisa usuário no banco
  auth: payload => {
     return db.User.findOne({ where: payload})
  }
}