"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const http_1 = require("http");
const app = (0, express_1.default)();
const pubsub = new apollo_server_express_1.PubSub();
const schema = (0, apollo_server_express_1.makeExecutableSchema)({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
});
const apolloServer = new apollo_server_express_1.ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res, pubsub }),
});
apolloServer.applyMiddleware({ app, cors: false });
const httpServer = (0, http_1.createServer)(app);
apolloServer.installSubscriptionHandlers(httpServer);
httpServer.listen({ port: 8000 }, () => {
    console.log('GraphQL server ready.' + apolloServer.graphqlPath);
    console.log('GraphQL subs server ready.' + apolloServer.subscriptionsPath);
});
