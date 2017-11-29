import gql from 'graphql-tag'

const ALL_MESSAGES_QUERY = gql`
  query AllMessagesQuery {
    allMessages {
      id
      text
    }
  }
`

export default ALL_MESSAGES_QUERY;