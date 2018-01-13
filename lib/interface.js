const path        = require('path');
const klass       = require('klass');
const _           = require('underscore');
const uuid        = require('uuid/v4');

var Api           = require(path.join(__dirname, 'api'));
var requests      = {};

module.exports = klass(function(options) {
  var self = this;
  this.requestType = 'request';
  this.requester = new Api(options);
}).methods({

  connect: function(channel) {
    var self = this;
    this.requester.on(this.channel + ':subscribe', function(json) {
      if (self.verbose) {
        console.log(json);
      }
      if (requests[json.id]) {
        requests[json.id](json.error, json.body);
        setTimeout(function(d) {
          delete requests[d.id];
        }, 100, json);
      }
    })
  },

  post: function(path, data, then) {
    var req = {data: data};
    req.method = 'post';
    this.exec(path, req, then);
  }, 

  get: function(path, data, then) {
    var req = {data: data};
    req.method = 'get';
    this.exec(path, req, then);
  }, 
  
  exec: function(path, data, then) {
    data = this.ensureId(data);
    data.url = path;
    data.type = this.requestType;
    requests[data.id] = then;
    this.requester.send(this.channel, data); 
  },
  
  ensureId: function(data) {
    if (data.id == undefined) {
      var id = uuid();
      data.id = id;
    }
    return data;
  }
});
 
