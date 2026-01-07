const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { products, categories, reviews } = require("./db");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Category,
        Product,
        Query
    },
    context: {
        products, categories, reviews
    }
});

server.listen().then(({url}) => {
    console.log("Server is ready at" + url)
});