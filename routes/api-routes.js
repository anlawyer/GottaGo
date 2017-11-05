
var db = require('../models');

module.exports = function (app) {
  app.get('/api/restrooms', function (req, res) {
    db.restroom.findAll({})
    .then(function (data) {
      res.json(data);
    });
  });

  app.post('/api/new/restroom', function (req, res) {
    console.log(req.body);
    db.restroom.create(
      req.body
      // {
      //   name: req.body.name,
      //   location: req.body.location,
      //   category: req.body.category,
      //   comments: req.body.comments
      //   // createdAt: req.body.createdAt,
      //   // updatedAt: req.body.updatedAt
      // }
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
