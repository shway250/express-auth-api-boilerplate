//express is the app framework
var express = require('express');
//ejs layouts let's you format layouts that you inject html into
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
//setting ejs as view engine
app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

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
