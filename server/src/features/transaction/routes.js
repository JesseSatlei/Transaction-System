const controllers = require('./controllers');
module.exports = (router) => {
  router.post('/v1/api/transaction', controllers.create);
  router.get('/v1/api/transaction', controllers.findAll);
}