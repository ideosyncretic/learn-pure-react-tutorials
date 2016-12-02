import React, {Component} from 'react'

class UserProfile extends Component {
  render () {
    let {name} = this.props
    return (
      <div className='pinterest-user-profile'>
        <UserName/>
        <UserProfilePicture/>
        <UserStats/>
      </div>
    )
  }
}

export default UserName
