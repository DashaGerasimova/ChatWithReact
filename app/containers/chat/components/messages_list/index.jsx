// @flow
import React, { Component } from 'react';
import styles from './index.css';

export default function MessagesList(props) {
  return (
    <ul>
      {props.messages.map(message => (
        <li>{message}</li>
      ))}
    </ul>
  );
}
