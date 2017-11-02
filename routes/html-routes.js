var express = require('express');

module.exports = function (app) {
  app.get('/', function (req,res) {
    res.render('pages/index');
  });

  app.get('/landing', function (req,res) {
    res.render('pages/landing');
  })
};
