import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function AllMessagesList({ data: { allMessages } }) {
  return (
    <ul>
      {allMessages.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
}

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
    <AllMessagesList data={data}/>
  )
})
export default AllMessagesLoaded;

