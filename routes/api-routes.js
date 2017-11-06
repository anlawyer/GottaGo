
var db = require('../models');

module.exports = function (app) {
  app.get('/api/restrooms', function (req, res) {
    db.restroom.findAll({})
    .then(function (data) {
      res.json(data);
    });
  });

  app.post('/api/new/restroom', function (req, res) {
    db.restroom.create(req.body)
    .then(function (data) {
      res.send({err: 0, redirectUrl: '/landing_list'});
    });
  });

  app.post('/api/new/user', function (req, res) {
    console.log(req.body);
    db.User.create(req.body)
    .then(function (data) {
      res.send({err: 0, redirectUrl: '/landing_list'});
    });
  });
};
