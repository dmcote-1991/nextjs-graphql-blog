import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables force-fetching on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://localhost:3000/graphql', // REPLACE with my GraphQL API URL
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
