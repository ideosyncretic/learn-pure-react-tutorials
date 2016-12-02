import React, {Component} from 'react'

class UserTitleButtons extends Component {
  render () {
    return (
      <div className='user-title-buttons'>
        <div className='details-icon'><i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
        <FollowButton>Follow</FollowButton>
      </div>
    )
  }
}

export default UserTitleButtons
