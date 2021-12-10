const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class SellsAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.account_api_url;
    }

    async createSells(sells) {
        sells = new Object(JSON.parse(JSON.stringify(sells)));
        return await this.post('/Sells', sells);
    }
    
    async sellsByUsername(username) {
        return await this.get(`/Sells/${username}`);
    }
}
module.exports = SellsAPI;
}