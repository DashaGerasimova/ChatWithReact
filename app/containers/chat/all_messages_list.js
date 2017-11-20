import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessagesList from './components/messages_list/index';

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const AllMessagesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList)

export default AllMessagesList;