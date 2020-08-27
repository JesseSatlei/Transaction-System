const db = require('../../_db/models');

module.exports = {
  create: payload => db.Transaction.create(payload),
  getAll: payload => db.Transaction.findAll(payload),
}