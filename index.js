const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');


const {typeDefs, resolvers} = require('./graphql')

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),

});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: false,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQl running at ${url}`);
});
