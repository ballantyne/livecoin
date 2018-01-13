const path       = require('path');
const klass      = require('klass');
const _          = require('underscore');
var EventEmitter = require('events');
var Signature    = require(path.join(__dirname, 'signature'));
var rateLimit    = require('function-rate-limit');
var request      = require('request');
var events       = new EventEmitter();


module.exports = klass(function(options) {
  if (options == undefined) options = {url: 'https://api.livecoin.net'};
  var self      = this;
 

  if (options.key && options.secret) {
    var signer   = new Signature({key: options.key, secret: options.secret});
  } else {
    var signer   = false;
  }

  var createRequest = rateLimit(60, 60000, function (url, data, signer, func) {
    var options = {
      method: (data.method == 'get' ? "GET" : 'POST'),
      headers: {
        'User-Agent': 'LIVECOIN NPM'
      }
    };
    options.url = url.concat(data.url);

    if (data.method == 'get') {
      options.qs   = data.data;
    } else {
      if (data.data && _.keys(data.data).length > 0) { 
        options.form = data.data;
      }
    }

    if (signer != false) {
      _.extend(options.headers, signer.sign(data.data));
    }

    request(options, function(err, response, body) {
      if (err) console.log(err);
      console.log(body);
      func(err, data.id, JSON.parse(body));
    });
  });

  var createOrder = rateLimit(10, 10000, function (data) {
    self.send('request', data);
  });

  this.on('public', function(data) {
    data.channel = 'public:subscribe';
    self.send('request', data);
  });

  this.on('voucher', function(data) {
    data.channel = 'voucher:subscribe';
    self.send('request', data);
  });

  this.on('user', function(data) {
    data.channel = 'user:subscribe';
    self.send('request', data);
  });

  this.on('withdrawal', function(data) {
    data.channel = 'withdrawal:subscribe';
    self.send('request', data);
  });

  this.on('order', function(data) {
    data.channel = 'order:subscribe';
    createOrder(data); 
  })

  this.on('request', function(data) {
    createRequest(options.url, data, signer, function(err, id, body) {
      self.send(data.channel, {id: id, error: err, body: body});     
    })    
  })

}).methods({
  send: function(e, d) {
    events.emit(e, d);
  },
  
  on: function(e, f) {
    events.on(e, f);
  }
})
