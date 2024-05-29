import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const endpoint = 'https://rickandmortyapi.com/graphql';
const graphqlClient = new ApolloClient({
  uri: endpoint,
  link: createHttpLink({
    uri: endpoint,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

export default graphqlClient;
