import React, {Component} from 'react'

class Header extends Component {
  render () {
    let {number, title, source} = this.props
    return (
      <div>
        <span className='story-title'>{number}.{' '}<strong>{title}</strong></span>
        { " " }
        (<a href={source} className='story-source'>{source}</a>)
      </div>
    )
  }
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  source: React.PropTypes.string.isRequired
}

export default Header
