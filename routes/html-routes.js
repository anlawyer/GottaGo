var express = require('express');
var db = require('../models')

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render('pages/index');
  });

  app.get('/landing_map', function (req, res) {
    res.render('pages/landing_map');
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

  app.get('/landing_list', function (req,res) {
    db.restroom.findAll({})
    .then(function (data) {
      res.render('pages/landing_list', {list:data})
    });
  });

  app.get('/addRestroom', function (req,res) {
    res.render('pages/add-restroom');
  });
};
