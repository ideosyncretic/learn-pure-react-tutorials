import React from 'react';

function CommitMessage ({ commit }) {
  return (
    <div className='commit-message'>{commit.message}</div>
  )
}

export default CommitMessage
