const controllers = require('./controllers');
// Configura rotas do usuário
module.exports = (router) => {
  router.post('/v1/api/user', controllers.create)
}