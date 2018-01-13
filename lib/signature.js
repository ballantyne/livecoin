const path        = require('path');
const klass       = require('klass');
const _           = require('underscore');
const crypto      = require('crypto');
const querystring = require('querystring');

module.exports = klass(function(options) {
  this.config = options;
}).methods({
  sign: function(data) {
    var keys   = _.keys(data).sort();
    var obj    = {};
    for (i = 0; i < keys.length; i++) { 
      var key  = keys[i];
      obj[key] = data[key];
    }
    var string = querystring.stringify(obj);
    var hmac   = crypto.createHmac('sha256', this.config.secret);
    hmac.update(string);
    return {"API-key": this.config.key, "Sign": hmac.digest('hex').toUpperCase()};
  }
})
