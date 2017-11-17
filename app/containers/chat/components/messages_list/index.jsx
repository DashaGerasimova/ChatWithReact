// @flow
import React, { Component } from 'react';
import styles from './index.css';

export default function MessagesList(props) {
  return (
    <ul>
      {props.messages.map(message => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
}
