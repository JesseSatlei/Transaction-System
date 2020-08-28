const Boom = require('boom');
const Validator = require('fastest-validator');

const services = require('./services');

const v = new Validator();

module.exports = {
  // Cria uma nova transação
  create: async (ctx) => {
    const { request: { body }, response} = ctx;
    // Validações básicas para criação da transação
    const schema = {
      name: { max: 120, min: 2, type: 'string' },
      transaction: { type: 'number' },
      balance: {  type: 'number' },
    }

    const errors = v.validate(body, schema);
    // Caso algum dado esteja incorreto, é retornado erro
    if (Array.isArray(errors) && errors.length) {
      response.status = 400;
      return response.body = Boom.badRequest(null, errors);
    }
    // Cria a transação e retorna ela no body
    const transaction = await services.create(body);
    response.body = transaction;
  },

  // Procura todas as transações
  findAll: async (ctx) => {
    const { request: {body}, response } = ctx;

    const transaction = await services.findAll();
    response.body = transaction;
  }
}