var Category = require('./categoryModel');
var _ = require('lodash');

// middle ware to find document according to params in url
exports.params = function(req, res, next, id) {
  // use the id and attach the category to req
  Category.findById(id)
    .then(category => {
        if(!category) {
            next(new Error('No category with that id'));
        } else {
            req.category = category;
            next();
        }
    }, err => {
        next(err);
    });
};

// get all the categoires
exports.get = function(req, res, next) {
    Category.find({})
        .then(category => {
            res.json(category);
        }, err => {
            next(err);
        });
};

// handler to return a json ojbect
exports.getOne = function(req, res, next) {
  var category = req.category;  // req.category is attached by controller param
  res.json(category);
};

// handler to update
exports.put = function(req, res, next) {
  var category = req.category;

  var update = req.body;

  _.merge(category, update);

  category.save(function(err, saved) {  // save updated document in db
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newcategory = req.body;

  Category.create(newcategory)  // create save the new document
    .then(function(category) {
      res.json(category);
    }, function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.category.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
