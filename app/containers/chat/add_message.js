import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import MessageField from './components/message_field/index'
import { addMessage } from '../../actions/messages'

const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessageMutation($text: String!) {
    create_message(
      text: $text
    ) {
      id
      text
    }
  }
`

const ALL_MESSAGES_QUERY = gql`
  query AllMessagesQuery {
    allMessages {
      id
      text
    }
  }
`
// 3
export default graphql(CREATE_MESSAGE_MUTATION, {
  props: ({ mutate }) => ({
    submit: (text) => mutate({ variables: { text } }),
  }),
  options: {
    update: (proxy, { data: { create_message } }) => {
      const data = proxy.readQuery({ query: ALL_MESSAGES_QUERY });
      data.allMessages.push(create_message);
      proxy.writeQuery({ query: ALL_MESSAGES_QUERY, data });
    }
  }
}) (MessageField)

