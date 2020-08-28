const controllers = require('./controllers');
// Configura rota de autentificação
module.exports = router => {
  router.post('/v1/api/auth', controllers.auth)
}