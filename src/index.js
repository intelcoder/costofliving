const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import { schema } from './schemas'

// Construct a schema, using GraphQL schema language

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    country: () => 'Hello world!',
  },
};

const server = new ApolloServer({
   schema: schema,
   introspection: true,
   playground: true
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);