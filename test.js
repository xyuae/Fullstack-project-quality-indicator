var app = require('./server/server');
var request = require('supertest');   // supertest handle the http request
var chai = require('chai').expect;    // chai is an assertion library for test
var colors = require('colors');
// Mocha is running the test which gives describe and framework

// make tests for the other CRUD routes
// DELETE, UPDATE, PUT, GET ONE

describe('[]'.yellow, function(){
  // test get
  it('should get all projects', function(done) {
    request(app)
      .get('/api/projects')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)  // a method from chai
      .end(function(err, resp) {
        chai(resp.body).to.be.an('array');
        done();
      });
  });
  // define a mock project data for post, update and delete
  var project = {
      name: 'Muf Mufasa',
      technical_mastery_status:{
        score: 0.5
      }
  };
  // test post
  it('should create a project', (done) => {

      request(app)
        .post('/api/projects')
        .send(project)
        .set('Accept', 'application/json')
        .expect('201')
        .end((err, resp) => {
            project._id = resp.body._id;
            chai(resp.body).to.be.an('object');
            console.log(resp.body.name);
            chai(resp.body.name).to.eql(project.name);
            //chai(resp.body.technical_mastery_status.score).to.eql(project.technical_mastery_status.score);
            done();
        });
  });
  // test put
  it('should update a project', (done) => {
      request(app)
        .put('/api/projects/' + project._id)
        .send({
            name: 'new name'
        })
        .end((err, resp) => {
            chai(resp.body.name).to.eql('new name');
            done();
        });
  });
  // test delete
  it('should delete a project', (done) => {
      project.name = "new name";
      request(app)
        .delete('/api/projects/' + project._id)
        .end((err, resp) => {
            chai(resp.body.name).to.eql(project.name);
            done();
        });
  });
});
