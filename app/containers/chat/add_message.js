import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import MessageField from './components/message_field/index'

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
// 3
export default graphql(CREATE_MESSAGE_MUTATION, {
  props: ({ mutate }) => ({
    submit: (text) => mutate({ variables: { text } }),
  })
}) (MessageField)

