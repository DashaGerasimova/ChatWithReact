// @flow
import React, { Component } from 'react';
import MessagesHistory from './components/messages_history/index';

export default class ChatPageContainer extends Component {
  constructor() {
    super();
    this.state = { messages: [] }
  }
  render() {
    return <MessagesHistory/>;
  }
}
