const { excludedProperties } = require("juice");
exports.myMiddleware = (req, res, next) => {
    req.name = 'David'
    next()
};

exports.homePage = (req, res) => {
  res.render("index", {
    name: req.name,
  });
};
