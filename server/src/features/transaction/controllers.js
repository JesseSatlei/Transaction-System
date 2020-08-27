const Boom = require('boom');
const Validator = require('fastest-validator');

const services = require('./services');

const v = new Validator();

module.exports = {
  create: async (ctx) => {
    const { request: { body }, response} = ctx;
    const schema = {
      name: { max: 120, min: 2, type: 'string' },
      transaction: { type: 'number' },
      balance: {  type: 'number' },
    }

    const errors = v.validate(body, schema);

    if (Array.isArray(errors) && errors.length) {
      response.status = 400;
      return response.body = Boom.badRequest(null, errors);
    }

    const transaction = await services.create(body);
    response.body = transaction;
  },

  findAll: async (ctx) => {
    const { request: {body}, response } = ctx;

    const transaction = await services.findAll();
    response.body = transaction;
  }
}