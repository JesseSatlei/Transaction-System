const db = require('../../_db/models');
// Realiza criação do usuário
module.exports = {
  create: payload => db.User.create(payload)
}