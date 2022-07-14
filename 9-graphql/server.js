"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const app = (0, express_1.default)();
const schema = (0, apollo_server_express_1.makeExecutableSchema)({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
});
const apolloServer = new apollo_server_express_1.ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
});
apolloServer.applyMiddleware({ app, cors: false });
app.listen({ port: 8000 }, () => {
    console.log('GraphQL Server is ready at http://localhost:8000/graphql');
});
