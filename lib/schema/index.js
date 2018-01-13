const path = require('path');

module.exports.public      = require(path.join(__dirname, 'public'));
module.exports.orders      = require(path.join(__dirname, 'orders'));
module.exports.signature   = require(path.join(__dirname, 'signature'));
module.exports.user        = require(path.join(__dirname, 'user'));
module.exports.voucher     = require(path.join(__dirname, 'voucher'));
module.exports.withdrawal  = require(path.join(__dirname, 'withdrawal'));
module.exports.authorized  = require(path.join(__dirname, 'authorized'));

