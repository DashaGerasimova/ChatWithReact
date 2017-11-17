import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../../../actions/messages';

let AddMessageField = ({ dispatch, onClick }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addMessage(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button onClick={onClick}>
          Add Message
        </button>
      </form>
    </div>
  );
}
AddMessageField = connect()(AddMessageField)

export default AddMessageField