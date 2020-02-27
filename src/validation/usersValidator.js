var Joi = require('joi');

const validators = {
  getUserByIdValidator: Joi.object().keys({
    params: Joi.object().keys({
      id: Joi.number()
        .positive()
        .required()
    })
  }),
  createUserValidator: Joi.object().keys({
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
  }),
  updateUserValidator: Joi.object().keys({
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
  }),
  deleteUserValidator: Joi.object().keys({
    params: Joi.object().keys({
      id: Joi.number()
        .positive()
        .required()
    })
  })
};

module.exports = validators;
