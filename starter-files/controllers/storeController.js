const { excludedProperties } = require("juice");
exports.homePage = (req, res) => {
    res.render('index',{
        name: req.query.name
    })
  }