import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import MessagesList from './components/messages_list/index'

const ALL_MESSAGES_QUERY = gql`
  query AllMessagesQuery {
    allMessages {
      id
      text
    }
  }
`
const AllMessagesLoaded = graphql(ALL_MESSAGES_QUERY)(({ data }) => {
  if (data.loading) return <div>loading...</div>;
  return (
    <MessagesList messages={data.allMessages}/>
  )
})
export default AllMessagesLoaded;

