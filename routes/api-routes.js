
var db = require('../models');

module.exports = function (app) {
  app.get('api/restrooms', function (req, res) {
    db.restroom.findAll({})
    .then(function (data) {
      res.json(data);
    });
  });

  app.post('api/newrestroom', function (req, res) {
    console.log(req.body);
    db.restroom.create({
      name: req.body.name,
      location: req.body.location,
      category: req.body.category,
      comments: req.body.comments,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt
    })
    .then(function (data) {
      res.json(data);
    });
  });
};
