// @flow
import type { messagesStateType } from '../reducers/messages';

let nextMessageId = 0
export const addMessage = text => {
  return {
    type: 'ADD_MESSAGE',
    id: nextMessageId++,
    text
  }
}