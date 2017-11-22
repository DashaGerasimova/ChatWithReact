import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessagesList from './components/messages_list/index'

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

const AllMessagesList = connect(
  mapStateToProps
)(MessagesList)

export default AllMessagesList
