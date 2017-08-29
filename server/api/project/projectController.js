var Project = require('./projectModel');
var _ = require('lodash');
var logger = require('../../util/logger');

// security concern: authorized user can access all projects given their name
exports.paramsByName = function(req, res, next, name) {
  Project.find({name: name}, {name: 1, history:1})
  .populate('owners categories')
  .exec()
  .then(function(project){
    if(!project) {
      next(new Error('No project with that name'));
    } else {
      req.project = project;
      next();
    }
  }, function (err) {
    next(err);
  });
};

exports.params = function(req, res, next, id) {
  Project.findById(id)
    .populate('owners categories')
    .exec()
    .then(function(project) {
      if (!project) {
        next(new Error('No project with that id'));
      } else {
        req.project = project;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Project.find({})
    .populate('owners categories')
    .exec()
    .then(function(projects) {
      res.json(projects);
    }, function(err) {
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var project = req.project;
  res.json(project);
};

exports.put = function(req, res, next) {
  var project = req.project;

  var update = req.body;

  _.merge(project, update);

  project.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.post = function(req, res, next) {
  var newproject = req.body;
  Project.create(newproject)
    .then(function(project) {
      res.json(project);
    }, function(err) {
      logger.error(err);
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.project.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
