// @flow
import React, { Component } from 'react';
import ChatPage from './components/chat_page';

export default class ChatPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: ["aaaa"] };
  }

  render() {
    return <ChatPage messages={this.state.messages} />;
  }
}
