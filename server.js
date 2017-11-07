// setting up express server on port 8080, setting up body parser,
// setting up view engine for ejs, requiring route files
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load();

var app = express();
var PORT = process.env.PORT || 8080;

var db = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('./public'));

app.set('view engine', 'ejs');

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});
