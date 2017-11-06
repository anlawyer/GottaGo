
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
      res.json(data);
    });
  });

  app.post('/api/new/user', function (req, res) {
    console.log(req.body);
    db.User.create(req.body)
    .then(function (data) {
      res.json(data);
    });
  });

  app.post('/api/check-user', function (req, res) {
    console.log(req.body);
    db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function (data) {
      if (!data.username) {
        res.send({user: false});
      } else {
        res.send({user: true});
      }
    });
  });
};
