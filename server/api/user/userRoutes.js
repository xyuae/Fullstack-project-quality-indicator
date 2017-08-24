var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./userController');
var createRoutes = require('../../util/createRoutes');
createRoutes(controller, router); // use the controller to create router

module.exports = router;
