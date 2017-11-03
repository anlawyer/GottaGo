var express = require('express');

module.exports = function (app) {
  app.get('/', function (req,res) {
    res.render('pages/index');
  });

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
  });
};
