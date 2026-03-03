const express= require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
  res.json(`Fetching cart for user with ID: ${req.params.userId}`);
});

router.post('/:userId', (req, res) => {
  res.json(`Adding product to cart for user with ID: ${req.params.userId}`);
});

module.exports = router;