var express = require('express');

var router = express.Router();

router.get('/', function (req,res) {
  res.render('pages/index');
});

router.get('/landing', function (req,res) {
  res.render('pages/landing');
});

module.exports = router;
