const services = require("../auth/services");

module.exports = {
  create: async ctx => {
    const { request, response } = ctx;
    const user = await services.create(request.body);
    response.body = user;
  }
}