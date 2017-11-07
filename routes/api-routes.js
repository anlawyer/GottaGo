
var db = require('../models');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var authController = require('../controller/authcontroller.js');

module.exports = function (app) {
  app.get('/signup', authController.signup);

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

  // not sure if this should go in this file or in login.js...
//   passport.use(new LocalStrategy(
//     function (username, password, done) {
//       db.User.findOne({
//         where: {
//           username: username
//         }
//       }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         // somewhere in here, use bcrypt to hash/unhash passwords
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     }
// ));
  // this is right, its the post route
  // app.post('/api/check-user',
  //   passport.authenticate('local', {
  //     successRedirect: '/landing_list',
  //     failureRedirect: '/login',
  //     failureFlash: true })
  // );

  // function (req, res) {
  //   console.log(req.body);
  //   db.User.findOne({
  //     where: {
  //       username: req.body.username
  //     }
  //   }).then(function (data) {
  //     if (data == null) {
  //       res.send({user: false});
  //     } else {
  //       res.send({user: true});
  //     }
  //   });
  // });
};
