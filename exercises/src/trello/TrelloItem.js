import React, {Component} from 'react'

class TrelloItem extends Component {
  render () {
    let {item} = this.props
    return (
      <div className='item-card'>
        <span className='item-content'>{item}</span>
      </div>
    )
  }
}

export default TrelloItem
