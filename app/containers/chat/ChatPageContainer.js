// @flow
import React, { Component } from 'react';
import MessagesList from './messages_list/index';

export default class ChatPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return <MessagesList messages={this.state.messages}/>;

  }
}
