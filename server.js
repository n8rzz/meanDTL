var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();

// routes
var routes = require('./routes/index');

// models
var Project = require('./app/models/project');
var TeamMember = require('./app/models/teamMember');


var mongo = require('mongoskin');
var mongoose = require('mongoose');
var monk = require('monk');
var db = mongo.db('mongodb://localhost:27017/restAngular', {native_parser:true});
//var db = mongo.db('mongodb://heroku_app34635561:r9qf7cochugudb71j6chgancbr@ds051831.mongolab.com:51831/heroku_app34635561', {native_parser:true});

var app = express();


app.set('port', process.env.PORT || 3000);
//app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
    req.db = db;
    next();
});


app.use('/', routes);


app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});


module.exports = app;