const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Fetching all products');
});

router.post('/', (req, res) => {
  res.json('Adding a new product');
});

router.get('/:id', (req, res) => {
  res.json(`Fetching product with ID: ${req.params.id}`);
});

module.exports = router;