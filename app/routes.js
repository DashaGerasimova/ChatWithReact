/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import ChatPage from './containers/chat/ChatPageContainer';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={ChatPage} />
    </Switch>
  </App>
);
