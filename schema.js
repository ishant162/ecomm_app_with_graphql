const { gql } = require("apollo-server");


// Scaler types (type or nothing (can specify null) (need to specify ! if we need the specific type E.g String!)): String, Int, Float, Boolean, ID
// Defining how our query is going to look
exports.typeDefs = gql`
    type Query{
        hello: String!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
        helloArray: [String!]!
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product{
        id: ID!
        image: String!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        category: Category
        reviews: [Review!]!
    }

    type Category{
        id: ID!
        name: String!
        products(filter: ProductsFilterInput): [Product!]!
    }

    type Review{
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }
`;