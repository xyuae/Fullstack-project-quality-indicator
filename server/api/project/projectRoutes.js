/*
RESTful api for project CRUD
*/
var _ = require('lodash');
var projectRouter = require('express').Router();

var projects = [];
var id = 0;

var updateId = function(req, res, next) {
	if (!req.body.id) {
		id++;
		req.body.id = id + '';
	}
	next();
};

projectRouter.param('id', function(req, res, next, id) {
	var project = _.find(projects, {id: id});

	if (project) {
		req.project = project;
		next()
	} else {
		res.send();
	}
});

projectRouter.get('/', (req, res) => {
	res.json(projects);
});

projectRouter.get('/:id', (req, res) => {
	var project = req.project;
	res.json(project || {});
});

projectRouter.post('/', updateId, (req, res) => {
	var project = req.body;
	projects.push(project);
	res.json(project);
});

projectRouter.put('/:id', (req, res) => {
	var update = req.body;
	if(update.id) {
		delete update.id
	}

	var project = _.findIndex(projects, {id: req.params.id});
	if (!projects[project]) {
		res.send();
	} else {
		var updatedproject = _.assign(projects[project], update);
		//console.log(updatedproject)
		res.json(updatedproject);
	}
});

projectRouter.delete('/:id', function(req, res) {
  var project = _.findIndex(projects, {id: req.params.id});
  projects.splice(project, 1);
  res.json(req.project);
});

module.exports = projectRouter;
