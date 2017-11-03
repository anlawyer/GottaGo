var express = require('express');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('pages/index');
  });

<<<<<<< HEAD
  app.get('/landing', function (req, res) {
    res.render('pages/landing');
=======
  app.get('/account', function (req,res) {
    res.render('pages/account');
  });

  app.get('/login', function (req,res) {
    res.render('pages/login');
  });

  app.get('/signup', function (req,res) {
    res.render('pages/signup');
  });

  app.get('/landing', function (req,res) {
    res.render('pages/landing');
  })

  app.get('/addRestroom', function (req,res) {
    res.render('pages/add-restroom');
>>>>>>> 01a7577e678b1525e41cb94da21f976c8efa7b3e
  });
};
