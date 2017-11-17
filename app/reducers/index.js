// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import messages from './messages';

const rootReducer = combineReducers({
  messages,
  router,
});

export default rootReducer;
