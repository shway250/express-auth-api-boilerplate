//express is the app framework
var express = require('express');
//ejs layouts let's you format layouts that you inject html into
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');//require session here
var passport = require('./config/ppConfig');// require the passport configuration
var app = express();
//setting ejs as view engine
app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
/*
 * setup the session with the following:
 * 
 * secret: A string used to "sign" the session ID cookie, which makes it unique
 * from application to application. We'll hide this in the environment
 *
 * resave: Save the session even if it wasn't modified. We'll set this to false
 *
 * saveUninitialized: If a session is new, but hasn't been changed, save it.
 * We'll set this to true.
 */
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
// initialize the passport configuration and session as middleware
app.use(passport.initialize());
app.use(passport.session());

//this is where we will declare our routes
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/profile', function(req, res) {
  res.render('profile');
});
//where we will pull in our auth controller and its routes.
app.use('/auth', require('./controllers/auth'));
//setting server to local:3000 or whatever port we deploy onto
var server = app.listen(process.env.PORT || 3000);

module.exports = server;
