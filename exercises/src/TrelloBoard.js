import React, {Component} from 'react'
import trelloItems from './trelloItems.js'
import TrelloItem from './TrelloItem'
import './trello.css'

class TrelloBoard extends Component {
  render () {
    return (
      <div className='trello-bg'>
        <div className='trello-board'>
          <span className='board-name'><strong>Phone Features</strong></span>
          <div className='details-icon'><i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
          <div className='board-items'>
            {trelloItems.map(
              item => ( <TrelloItem key={trelloItems.indexOf(item)} item={item} /> )
            )}
          </div>
          <span className='add-card'>Add a card...</span>
        </div>
      </div>
    )
  }
}

export default TrelloBoard
