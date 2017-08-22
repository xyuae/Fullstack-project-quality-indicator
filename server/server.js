
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

var lionRouter = require('./lions');
var tigerRouter = require('./tigers');
var projectRouter = require('./project')


app.use(morgan('dev'))  // show http request in consle
app.use(express.static('client'));  // make client file public
app.use(bodyParser.urlencoded({extended: true})); // bodyParser middleware
app.use(bodyParser.json()); // read json middleware
// this is called mounting. when ever a req comes in for
// '/projects' we want to use this router
app.use('/lions', lionRouter);
app.use('/projects', projectRouter);    // mount project router

app.use(function(err, req, res, next) { // handle error
  if (err) {
    res.status(500).send(err);
  }
});


app.listen(3000);
console.log('on port 3000');
