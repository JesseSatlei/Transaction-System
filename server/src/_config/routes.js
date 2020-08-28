const authRoutes = require('../features/auth/routes');
const userRoutes = require('../features/user/routes');
const transactionRoutes = require('../features/transaction/routes');

// Configura rotas da aplicação
module.exports = (router) => {
  authRoutes(router);
  userRoutes(router);
  transactionRoutes(router);
}