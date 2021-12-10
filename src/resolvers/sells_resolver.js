const sellsResolver = {
    Query: {
        sellsByUsername: async(_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.sellsAPI.sellsByUsername(username)
            else
                return null

        }
    },
    Mutation: {
        createSells: async(_, { sells }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (sells.usernameOrigin == usernameToken)
                return dataSources.sellsAPI.createSells(sells)
            else
                return null

        }
    }
};
module.exports = sellsResolver;