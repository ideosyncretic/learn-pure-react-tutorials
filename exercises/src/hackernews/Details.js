import React, {Component} from 'react'
import Time from './time'

class Details extends Component {
  render () {
    let {points, user, timestamp, comments} = this.props
    return (
      <div>
        <span className='story-details'>
          {points} points by {user}
          <Time time={timestamp}/>{ ' ' }
          | flag | hide | {comments} comments |
        </span>
      </div>
    )
  }
}
Details.propTypes = {
  points: React.PropTypes.string.isRequired,
  user: React.PropTypes.string.isRequired,
  timestamp: React.PropTypes.string.isRequired,
  comments: React.PropTypes.string.isRequired
}

export default Details
