// @flow
import React, { Component } from 'react';
import MessagesList from './components/messages_list/index';
import AddMessageField from './components/message_field/index';

export default class ChatPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onSubmitClick() {
  	console.log("clicked");
  }

  render() {
    return (
      <div>
        <MessagesList messages={this.state.messages}/>
        <AddMessageField onClick={this.onSubmitClick}/> 
      </div>
    );
  }
}
