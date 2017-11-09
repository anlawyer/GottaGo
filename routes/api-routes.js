
var db = require('../models');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

// var authController = require('../controller/authcontroller.js');

module.exports = function (app) {
  // app.get('/signup', authController.signup);
  //
  // app.get('/logout', authController.logout);

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

  app.get('/api/landing_list', function (req, res) {
    db.restroom.findAll({})
    .then(function (data) {
      res.json(data);
    });
  });

  app.get('/api/landing_map', function (req, res) {
    db.restroom.findAll({})
    .then(function (data) {
      res.json(data);
    });
  });
  // make sure username isn't in use, adds new user if not

  app.post('/api/new/user', function (req, res) {
    console.log(req.body);
    db.User.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(function (data) {
      if (data == null) {
        console.log('User does not exist, creating new user.');
        db.User.create(req.body)
        .then(function (data) {
          res.json(data);
        });
      } else {
        console.log('User exists.');
        res.send({user: true});
      }
    }).catch(function (error) {
      res.render(error);
    });
  });

  // checking if user logging in exists in the database
  app.post('/api/check-user',
    function (req, res) {
      console.log(req.body);
      db.User.findOne({
        where: {
          username: req.body.username
        }
      }).then(function (data) {
        if (data == null) {
          console.log('no user');
          res.send({user: 'no user'});
        } else {
          db.User.findOne({
            where: {
              username: req.body.username,
              password: req.body.password
            }
          }).then(function (data) {
            if (data == null) {
              console.log('wrong password');
              res.send({user: 'wrong password'});
            } else {
              console.log('user + password match');
              res.send({user: true});
            }
          });
        }
      }).catch(function (error) {
        res.render(error);
      });
    });

  // make sure user exists and then updates
  app.put('/api/update/user', function (req, res) {
    console.log(req.body);
    console.log('94', typeof req.body.old_password);
    console.log('95', typeof req.body.password);
    db.User.findOne({
      where: {
        username: req.body.username,
        password: req.body.old_password
      }
    })
    .then(function (data) {
      if (data == null) { // if no match, send err
        console.log('username/password no match');
        res.send({user: false});
      } else { // if match, update
        // getting error here:
        // `TypeError: Path must be a string.Cannot create property 'updatedAt' on string '1234'`
        console.log('match, updating.');
        db.User.update(req.body.password, {
          where: {
            password: req.body.password
          }
        })
        .then(function (data) {
          // res.json(data);
          console.log(data);
        });
      }
    }).catch(function (error) {
      // res.render(error);
      console.log(error);
    });
  });
};

  // function isLoggedIn (req, res, next) {
  //   if (req.isAuthenticated()) {
  //     return next();
  //     // res.redirect('/signin');
  //   }
  // }

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
