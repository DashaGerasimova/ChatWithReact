// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './index.css';

class MessagesList extends Component {
  render() {
  	return (
  	  <ul>
	    {this.props.messages.map(message => (
	      <li key={message.id}>{message.text}</li>
	    ))}
      </ul>
    )
  }
};

export default MessagesList;