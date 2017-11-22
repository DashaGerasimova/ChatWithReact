/* eslint flowtype-errors/show-errors: 0 */
import React from 'react'
import { Switch, Route } from 'react-router'
import App from './containers/App'
import ChatPage from './containers/chat/chat_page'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// 2
const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' })

// 3
const client = new ApolloClient({
  link: httpLink,
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
