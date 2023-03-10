import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    // reconnect false for local development
    reconnect: false,
    connectionParams: {
      authToken: localStorage.getItem("token"),
    },
  },
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const link = split(
  ({ query }) => {
    const { kind, operation }: any = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  authLink.concat(httpLink)
);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
