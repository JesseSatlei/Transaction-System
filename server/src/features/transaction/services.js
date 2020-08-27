const db = require('../../_db/models');

module.exports = {
  create: payload => db.Transaction.create(payload),
  findAll: () => db.Transaction.findAll(),
}