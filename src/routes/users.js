const express = require('express');
const router = express.Router();

const validator = require('express-joi-validator');

const usersController = require('../controllers/usersController');
const usersValidator = require('../validation/usersValidator.js');

// GET - Find User(s)
router.get('/', usersController.getUsers);

router.get(
  '/:id',
  validator(usersValidator.getUserByIdValidator),
  usersController.getUserById
);

// POST - Create new User
router.post(
  '/',
  validator(usersValidator.createUserValidator),
  usersController.createUser
);

// PUT - Update a User
router.put(
  '/:id',
  validator(usersValidator.updateUserValidator),
  usersController.updateUser
);

// DELETE - Delete a User
router.delete(
  '/:id',
  validator(usersValidator.deleteUserValidator),
  usersController.deleteUser
);

module.exports = router;
