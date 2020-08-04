const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works! Crikey!');
  // res.json(req.query)
});

module.exports = router;
