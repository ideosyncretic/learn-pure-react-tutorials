import React, {Component} from 'react'

class Nav extends Component {
  render () {
    return (
      <div className='stories-nav'>
        <div className='nav-content'>
          <div className='nav-logo'>
            <img className='logo' src='https://news.ycombinator.com/y18.gif' alt='logo'/>
          </div>
          <span className='nav-links'>
            <span className='nav-title'>Hacker News</span> new | comments | show | ask | jobs | submit
          </span>
        </div>
      </div>
    )
  }
}

export default Nav
