const { gql } = require('apollo-server');

const productTypeDefs = gql `
    type Product {
        username: String!
        id: String!
        description: String!
        price: Int!
        stock: Int!
        unit_m: String!
    }

    input ProductInput {
        username: String!
        id: String!
        description: String!
        price: Int!
        stock: Int!
        unit_m: String!
    }

    extend type Query {
        productByUsername(username: String!): [Product]
    }

    extend type Mutation {
        createProduct(product: ProductInput!): Product
    }
`;
module.exports = productTypeDefs;

