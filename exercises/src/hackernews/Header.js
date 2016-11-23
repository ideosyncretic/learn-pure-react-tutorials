import React, {Component} from 'react'

class Header extends Component {
  render () {
    let {title, source} = this.props
    return (
      <div className='story-header'>
        <span className='story-title'>{title}</span>
        {' '}
        <span className='story-source'>({source})</span>
      </div>
    )
  }
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  source: React.PropTypes.string.isRequired
}

export default Header
