const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  // res.send('Hey! It works! Crikey!');
  // res.json(req.query)
  res.render("hello", {
    name: req.query.name,
    job: req.query.job,
    location: req.query.location,
  });
  console.log(res.locals)
});

module.exports = router;
