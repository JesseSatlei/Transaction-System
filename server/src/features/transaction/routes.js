const controllers = require('./controllers');
// Configura rotas da transação
module.exports = (router) => {
  router.post('/v1/api/transaction', controllers.create);
  router.get('/v1/api/transaction', controllers.findAll);
}