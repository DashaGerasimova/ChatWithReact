// @flow
import type { messagesStateType } from '../reducers/messges';

let nextMessageId = 0
export const addTodo = text => {
  return {
    type: 'ADD_MESSAGE',
    id: nextMessageId++,
    text
  }
}