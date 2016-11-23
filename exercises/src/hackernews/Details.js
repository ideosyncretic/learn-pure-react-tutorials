import React, {Component} from 'react'
import Time from './time'

class Details extends Component {
  render () {
    let {points, user, timestamp, comments} = this.props
    let commentGrammar = function (comments) {
      if (comments > 1) {
        return 'comments'
      } else return 'comment'
    }
    return (
      <div className='story-details'>
        <span>
          {points} points by {user}{' '}
          <Time time={timestamp}/>{' '}
          | flag | hide | {comments} {commentGrammar(comments)} |
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
