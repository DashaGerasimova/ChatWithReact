// @flow
import React, { Component } from 'react';
import MessagesList from './components/messages_list/index';
import AddMessageField from './components/message_field/index';

export default class ChatPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <MessagesList messages={this.state.messages}/>
        <AddMessageField /> 
      </div>
    );
  }
}
