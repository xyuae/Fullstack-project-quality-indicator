module.exports = function(err, req, res, next) { // handle error
  if (err) {
    console.log('Error: ', err.stack);
    res.status(500).send(err);
  }
};
