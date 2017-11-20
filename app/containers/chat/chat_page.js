import React from 'react'
import AddMessage from './components/message_field'
import MessagesList from './all_messages_list'

const ChatPage = () => (
  <div>
    <AddMessage />
    <MessagesList />
  </div>
)

export default ChatPage