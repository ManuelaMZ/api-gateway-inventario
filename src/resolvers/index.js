const productResolver = require('./product_resolver');
const sellsResolver = require('./sells_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(productResolver, sellsResolver, authResolver);

module.exports = resolvers;