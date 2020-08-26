const Boom = require('boom');
const Validator = require('fastest-validator');

const services = require("./services");

const v = new Validator();

module.exports = {
  create: async ctx => {
    const { request: { body }, response } = ctx;
    const schema = {
      fullName: { max: 120, min: 2, type: 'string' },
      email: { max: 255, min: 5, type: 'string' },
      password: { max: 16, min: 8, type: 'string' }
    }

    // Realiza a validação dos dados conforme Schema criado
    const errors = v.validate(body, schema);

    if (Array.isArray(errors) && errors.length ) {
      response.status = 400;
      // para trocar a mensagem, só colocar no lugar do null
      return response.body = Boom.badRequest(null, errors);
    }

    const user = await services.create(body);
    response.body = user;
  }
}