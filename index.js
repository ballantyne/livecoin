const path = require('path');

module.exports.api           = require(path.join(__dirname, 'lib', 'api'));
module.exports.user          = require(path.join(__dirname, 'lib', 'user'));
module.exports.orders        = require(path.join(__dirname, 'lib', 'orders'));
module.exports.public        = require(path.join(__dirname, 'lib', 'public'));
module.exports.signature     = require(path.join(__dirname, 'lib', 'signature'));
module.exports.voucher       = require(path.join(__dirname, 'lib', 'voucher'));
module.exports.withdrawal    = require(path.join(__dirname, 'lib', 'withdrawal'));

