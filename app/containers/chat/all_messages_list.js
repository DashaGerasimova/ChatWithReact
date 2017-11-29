import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import MessagesList from './components/messages_list/index'
import { ALL_MESSAGES_QUERY } from '../../query/chat/all_messages'
import MessagesSubscription from '../../subscriptions/messages_subscription'

class AllMessagesLoaded extends Component {
  state = {
    messages: []
  };

  componentWillMount() {
    const messagesChannel = new MessagesSubscription({ 
      onUpdate: this.onMessagesUpdate, 
    });
    messagesChannel.subscribe();
  }

  onMessagesUpdate = (data) => {
    const { messages } = data;
    this.setState(() => ({ messages }));
  }

  render() {
    return <MessagesList messages={this.state.messages}/>
  }
}

export default AllMessagesLoaded;

