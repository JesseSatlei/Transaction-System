const Koa = require('koa');
const Router = require('koa-router');
const applyRoutes = require('./routes');

const app = new Koa();
const router = new Router();

module.exports = () => {

  applyRoutes(router);
  app.use(router.routes());

  app.listen(8080)
}