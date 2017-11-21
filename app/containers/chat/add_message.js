import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageField from './components/message_field/index';
import { addMessage } from '../../actions/messages';

const mapDispatchToProps = (dispatch) => {
  return {
  	onSubmitClick: (text) => {
  	  dispatch(addMessage(text))
  	} 
  }
}

const AddMessage = connect(
  null,
  mapDispatchToProps
)(MessageField)

export default AddMessage;