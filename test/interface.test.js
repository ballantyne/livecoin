var sinon = require('sinon');
var mockery = require('mockery');
var should = require('chai').should();


var assert = require('assert');
describe('Livecoin', function() {
  var requestStub, getProfile

    before(function(){
      mockery.enable({
	warnOnReplace: false,
	warnOnUnregistered: false,
	useCleanCache: true
      });

      requestStub = sinon.stub();
      mockery.registerMock('request', requestStub);
    });

  after(function(){
    mockery.disable();
  }); 

  describe('Interface', function() {
    describe('connect', function() {
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('post', function() {
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('get', function() {
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('exec', function() {
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('ensureId', function() {
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
  });
});
