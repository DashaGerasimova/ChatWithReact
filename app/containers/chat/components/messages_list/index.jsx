// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './index.css';

const MessagesList = ({ messages }) => (
  <ul>
	{messages.map(message => (
	  <li key={message.id}>{message.text}</li>
	))}
  </ul>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessagesList;