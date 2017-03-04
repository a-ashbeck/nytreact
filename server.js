// Require dependencies
var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Set the port
var PORT = process.env.PORT || 3000;

// Log activity
app.use(logger('dev'));

// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup engine for Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Setup static directory
app.use(express.static(__dirname + '/public'));

// Database configuration with mongoose
mongoose.connect('mongodb://heroku_psf03msb:7upgn5r583o9u8gvkpdmu47jpa@ds119020.mlab.com:19020/heroku_psf03msb');
var db = mongoose.connection;

// Show any mongoose errors
db.on('error', function(error) {
  console.log('Mongoose Error: ', error);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Listen on port 3000
app.listen(PORT, function() {
  console.log('App running on port ' + PORT);
});

// Require routes from controller
require('./controllers/articles_controller.js')(app);

