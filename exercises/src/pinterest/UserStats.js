import React, {Component} from 'react'
import UserTitleButtons from './UserTitleButtons'
import UserProfile from './UserProfile'

class UserInfo extends Component {
  render () {
    return (
      <div className='pinterest-user-info'>
        <UserTitleButtons/>
        <UserProfile/>
      </div>
    )
  }
}

export default UserInfo
