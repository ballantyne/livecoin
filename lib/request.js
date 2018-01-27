var _       = require('underscore');
var request = require('request');

module.exports = function (url, data, signer, func) {
  
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
    func(err, data.id, JSON.parse(body));
  });
};

