import React, {Component} from 'react'

class Board extends Component {
  render () {
    let {board} = this.props
    return (
      <div className='pinterest-board'>
        {board.name}
      </div>
    )
  }
}

export default Board
