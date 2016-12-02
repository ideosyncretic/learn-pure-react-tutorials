import React, {Component} from 'react'

class FollowButton extends Component {
  render () {
    return (
      <button className='follow-button'>{this.props.children}
      </button>
    )
  }
}

export default FollowButton
