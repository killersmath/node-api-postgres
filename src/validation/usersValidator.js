var Joi = require('joi');

const validators = {
  getUserByIdValidator: {
    params: {
      id: Joi.number()
        .positive()
        .required()
    }
  },
  createUserValidator: {
    body: Joi.object().keys({
      name: Joi.string()
        .trim()
        .regex(/[a-zA-Z\s]{1,50}/)
        .required(),
      email: Joi.string()
        .email()
        .max(255)
        .required()
    })
  },
  updateUserValidator: {
    params: Joi.object().keys({
      id: Joi.number()
        .positive()
        .required()
    }),
    body: Joi.object()
      .keys({
        name: Joi.string()
          .trim()
          .regex(/[a-zA-Z\s]{1,50}/),
        email: Joi.string()
          .email()
          .max(255)
      })
      .min(1)
  },
  deleteUserValidator: {
    params: {
      id: Joi.number()
        .positive()
        .required()
    }
  }
};

module.exports = validators;
