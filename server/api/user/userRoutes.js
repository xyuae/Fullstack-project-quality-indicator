var router = require('express').Router();
var logger = require('../../util/logger');
var _ = require('lodash');

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    logger.log('Hey from user!!');
    res.send({ok: true});
  });

module.exports = router;
