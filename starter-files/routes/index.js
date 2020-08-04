const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works! Crikey!');
  // res.json(req.query)
  let pathData = {
    name: req.query.name,
    job: req.query.job,
    location: req.query.location
  }
  res.render('hello',pathData)
});

module.exports = router;
