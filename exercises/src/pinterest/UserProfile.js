import React, {Component} from 'react'
import UserName from './UserName'
import UserProfilePicture from './UserProfilePicture'
import UserStats from './UserStats'

class UserProfile extends Component {
  render () {
    let {user} = this.props
    return (
      <div className='pinterest-user-profile'>
        <UserName/>
        <UserProfilePicture/>
        <UserStats/>
      </div>
    )
  }
}

export default UserProfile
