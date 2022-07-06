import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: '',
    headers: {
        'Authorization' : `Bearer `
    },
    cache: new InMemoryCache()
})