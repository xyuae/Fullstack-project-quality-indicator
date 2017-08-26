var User = require('../api/user/userModel');
var Project = require('../api/project/projectModel');
var Category = require('../api/category/categoryModel');
var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');

var users = [
  {username: 'Jimmylo', password: 'test'},
  {username: 'Xoko', password: 'test'},
  {username: 'katamon', password: 'test'}
];

var categories = [
  {name: 'intros'},
  {name: 'angular'},
  {name: 'UI/UX'}
];

var projects = [
  {name: 'Learn angular 2 today', safety_require: true},
  {name: '10 reasons you should love IE7', cyber_require: true},
  {name: 'Why we switched to Go', safety_require: true},
];

var createDoc = function(model, doc) {
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      return err ? reject(err) : resolve(saved);
    });
  });
};

var cleanDB = function() {
  logger.log('... cleaning the DB');
  var cleanPromises = [User, Category, Project]
    .map(function(model) {
      return model.remove().exec();
    });
  return Promise.all(cleanPromises);
};

var createUsers = function(data) {

  var promises = users.map(function(user) {
    return createDoc(User, user);
  });

  return Promise.all(promises)
    .then(function(users) {
      return _.merge({users: users}, data || {});
    });
};

var createCategories = function(data) {
  var promises = categories.map(function(category) {
    return createDoc(Category, category);
  });

  return Promise.all(promises)
    .then(function(categories) {
      return _.merge({categories: categories}, data || {});
    });
};

var createProjects = function(data) {
  var addCategory = function(project, category) {
    project.categories.push(category);

    return new Promise(function(resolve, reject) {
      project.save(function(err, saved) {
        return err ? reject(err) : resolve(saved);
      });
    });
  };

  var newProjects = projects.map(function(project, i) {
    project.author = data.users[i]._id;
    return createDoc(Project, project);
  });

  return Promise.all(newProjects)
    .then(function(savedProjects) {
      return Promise.all(savedProjects.map(function(project, i) {
        return addCategory(project, data.categories[i]);
      }));
    })
    .then(function() {
      return 'Seeded DB with 3 Projects, 3 Users, 3 Categories';
    });
};

cleanDB()
  .then(createUsers)
  .then(createCategories)
  .then(createProjects)
  .then(logger.log.bind(logger))
  .catch(logger.log.bind(logger));
