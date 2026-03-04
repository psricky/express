const express = require('express');
const router = express.Router();    

const cartController = require('../Controllers/cartController');

router.get('/:id', cartController.fetchCartForUser);    

router.post('/:id', cartController.addToCartWithUserId);

module.exports = router;