const db = require('../../_db/models');

module.exports = {
  // Cria métodos para pesquisa no banco
  create: payload => db.Transaction.create(payload),
  findAll: () => db.Transaction.findAll(),
}