//Se llama al typedef (esquema) de cada submodulo
const productsTypeDefs = require('./products_type_defs');
const sellsTypeDefs = require('./sells_type_defs');
const authTypeDefs = require('./auth_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, productsTypeDefs, sellsTypeDefs];

//Se exportan
module.exports = schemasArrays;