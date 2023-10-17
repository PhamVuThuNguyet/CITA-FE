import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_CMS } from '../config';

const client = new ApolloClient({
  uri: API_CMS,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
  },
});

export default client;
