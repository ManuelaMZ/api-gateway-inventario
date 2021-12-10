const { gql } = require('apollo-server');

const sellsTypeDefs = gql `
    type Sells {
        username: String!
        id_sale: String!
        date: String!
        id_product: String!
        amount: Int!
        WayToPay: String!

    }

    input SellsInput{
        username: String!
        id_sale: String!
        id_product: String!
        amount: Int!
        WayToPay: String!
    }

    extend type Query {
        sellsByUsername(username: String!): [Sells]
    }

    extend type Mutation {
        createSells(sells: SellsInput!): Sells
    }
`;

module.exports = sellsTypeDefs;