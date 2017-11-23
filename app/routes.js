/* eslint flowtype-errors/show-errors: 0 */
import React from 'react'
import { Switch, Route } from 'react-router'
import App from './containers/App'
import ChatPage from './containers/chat/chat_page'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:3000/graphiql',
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' })

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

export default () => (
  <ApolloProvider client={client}>
    <App>
      <Switch>
        <Route path="/" component={ChatPage} />
      </Switch>
    </App>
  </ApolloProvider>
)
