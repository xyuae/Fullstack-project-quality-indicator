var app = require('./server/server');
var request = require('supertest');   // supertest handle the http request
var chai = require('chai').expect;    // chai is an assertion library for test
var colors = require('colors');
// Mocha is running the test which gives describe and framework

// make tests for the other CRUD routes
// DELETE, UPDATE, PUT, GET ONE

describe('[User]'.yellow, function(){
  // test get
  it('should get all users', function(done) {
    request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)  // a method from chai
      .end(function(err, resp) {
        chai(resp.body).to.be.an('array');
        done();
      })
  });
  // define a mock user data for post, update and delete
  var user = {
      username: "Mufasa",
  }
  // test post
  it('should create a user', (done) => {

      request(app)
        .post('/api/users')
        .send(user)
        .set('Accept', 'application/json')
        .expect('201')
        .end((err, resp) => {
            user._id = resp.body._id;
            chai(resp.body).to.be.an('object');
            console.log(resp.body.username)
            chai(resp.body.username).to.eql(user.username);
            done();
        })
  });
  // test put
  it('should update a user', (done) => {
      request(app)
        .put('/api/users/' + user._id)
        .send({
            username: 'new name'
        })
        .end((err, resp) => {
            chai(resp.body.username).to.eql('new name');
            done();
        })
  });
  // test delete
  it('should delete a user', (done) => {
      user.username = "new name";
      request(app)
        .delete('/api/users/' + user._id)
        .end((err, resp) => {
            chai(resp.body.username).to.eql(user.username);
            done();
        })
  });
});
