import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://perfect-humpback-43.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
  });


  export default client;