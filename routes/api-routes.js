
var db = require('../models');

module.exports = function (app) {
  app.get('/api/restrooms', function (req, res) {
    db.restroom.findAll({})
    .then(function (data) {
      res.json(data);
    });
  });

  app.post('/api/new/restroom', function (req, res) {
    db.restroom.create(
      req.body
  )
    .then(function (data) {
      res.json(data);
    });
  });

  app.post('/api/new/user', function (req, res) {
    console.log(req.body);
    db.users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(function (data) {
      res.json(data);
    });
  });
};
