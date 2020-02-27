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
    body: {
      name: Joi.string()
        .trim()
        .regex(/[a-zA-Z\s]{1,50}/)
        .required(),
      email: Joi.string()
        .email()
        .max(255)
        .required()
    }
  },
  updateUserValidator: {
    params: {
      id: Joi.number()
        .positive()
        .required()
    },
    body: {
      name: Joi.string()
        .trim()
        .regex(/[a-zA-Z\s]{1,50}/)
        .required(),
      email: Joi.string()
        .email()
        .max(255)
        .required()
    }
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
