const _             = require('underscore');
const path          = require('path');
const Joi           = require('joi');
const currencyPairs = require(path.join(__dirname, '..', '..', 'config', 'currency_pairs'));
const arrayOfPairs = _.map(currencyPairs, function(pair) { return pair.currencyPair });

var Validations = {};

const limit = function(data) {
  var pair = _.findWhere(currencyPairs, {currencyPair: data.currencyPair});
  var schema = {
    currencyPair: Joi.string().required().valid(arrayOfPairs),
    price: Joi.number().required(),
    quantity: Joi.number().required()
  };
  if (pair) {
    console.log(pair);
    schema.price = Joi.number().required().precision(pair.price);
    schema.size = Joi.number().required().precision(pair.size);
  }
  return schema;
}

const market = function(data) {
  var pair = _.findWhere(currencyPairs, {currencyPair: data.currencyPair});
  var schema = {
    currencyPair: Joi.string().required().valid(arrayOfPairs),
    quantity: Joi.number().required()
  };
  if (pair) {
    schema.size = Joi.number().required().precision(pair.size);
  }
  return schema;
}


const cancel = function(data) {
  var pair = _.findWhere(currencyPairs, {currencyPair: data.currencyPair});
  var schema = {
    currencyPair: Joi.string().required().valid(arrayOfPairs),
    orderId: Joi.number().required()
  };
  return schema;
}



Validations['/exchange/buylimit']    = limit;
Validations['/exchange/selllimit']   = limit;
Validations['/exchange/buymarket']   = market;
Validations['/exchange/sellmarket']  = market;
Validations['/exchange/cancellimit'] = cancel;
module.exports = Validations;
