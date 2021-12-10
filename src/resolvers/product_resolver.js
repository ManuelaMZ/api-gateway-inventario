const productResolver = {
        Query: {
            productByUsername: async(_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.prouctAPI.productByUsername(username)
            else
                return null
    
        },
    },
    
    Mutation: {}
};
module.exports = productResolver;