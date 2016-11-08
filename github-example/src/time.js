import React, {Component} from 'react';
import moment from 'moment'

class Time extends Component {
  render () {
    let computeTimeString = () => {
      return moment(this.props.time).fromNow()
    } // fat arrow used to bind 'this' to the component, not function

    return (
      <span className='time'>{computeTimeString()}</span>
    )
  }
}
Time.propTypes = {
  time: React.PropTypes.string.isRequired
}

export default Time
