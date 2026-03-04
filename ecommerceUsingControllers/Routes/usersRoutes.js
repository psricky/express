const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/usersController');

router.get('/', usersController.fetchAllUsers);

router.post('/', usersController.addUser);

router.get('/:id', usersController.getUserWithId);

module.exports = router;