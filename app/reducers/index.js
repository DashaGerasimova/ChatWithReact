// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import messages from './messages';
import counter from './counter'

const rootReducer = combineReducers({
  messages,
  counter,
  router,
});

export default rootReducer;
