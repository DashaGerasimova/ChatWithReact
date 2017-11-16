import React, { Component } from 'react';

import MessagesList from './messages_list/index';

export default function ChatPage(props) {
  return (
    <MessagesList messages={props.messages}/>
  );
}
