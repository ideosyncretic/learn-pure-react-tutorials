import React, {Component} from 'react'
import Board from './Board'
import boards from './boards'
import user from './user'

class Pinterest extends Component {
  render () {
    return (
      <div className='pinterest-main'>
        <UserProfile user={user}/>
        {boards.map(
          board => ( <Board key={board.id} board={board} /> )
        )}
      </div>
    )
  }
}

export default Pinterest
