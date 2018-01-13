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

  describe('User Private API', function() {
    describe('trades', function() {
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('client_orders', function() {
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('order', function() {
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('payment_balances', function() {
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('payment_balance', function() {
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('history', function() {
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('history_size', function() {
      
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('commission', function() {
      
      xit('valid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
      xit('invalid', function(done) {
        assert.equal([1,2,3].indexOf(4), -1);
        done();
      });
    });
    describe('commissionCommonInfo', function() {
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
