import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_CMS } from '../config';

const client = new ApolloClient({
    uri: API_CMS,
    cache: new InMemoryCache(),
});

export default client;