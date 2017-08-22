var router = require('express').Router();

// api router will mount other routers
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below

// var ProjectRouter = require('./project/projectRoutes');
router.use('/projects', require('./project/projectRoutes'));

module.exports = router;
