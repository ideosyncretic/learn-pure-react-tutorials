import React, {Component} from 'react'

class Nav extends Component {
  render() {
    let {selectedTab, handleTabChange} = this.props
    return(
      <nav className='App-nav'>
        <ul>
          <li className={`App-nav-item ${selectedTab === 0 && 'selected'}`}><a onClick={handleTabChange.bind(this, 0)}>Items</a></li>
          <li className={`App-nav-item ${selectedTab === 1 && 'selected'}`}><a onClick={handleTabChange.bind(this, 1)}>Cart</a></li>
        </ul>
      </nav>
    )
  }
}
Nav.propTypes = {
  selectedTab: React.PropTypes.number.isRequired,
  handleTabChange: React.PropTypes.func.isRequired
}

export default Nav
