import React, { Component } from 'react';
let AddMessageField = ({ onSubmitClick }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onSubmitClick(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button>
          Add Message
        </button>
      </form>
    </div>
  );
}

export default AddMessageField