import React from 'react'
import ReactDOM from 'react-dom'

var MyComponent = React.createClass({
  render: function () {
    return (
      <div className='book'>
        <div className='title'>
          Sandwich
          {' '}
          Book
        </div>
        <div className='author'>
          Fatty McFatt
        </div>
        <ul className='stats'>
          <li className='rating'>
            5 stars
          </li>
          <li className='isbn'>
            12-345678-910
          </li>
        </ul>
      </div>
    )
  }
})

var SecondComponent = React.createClass({
  render: function () {
    return React.createElement(MyComponent, null)
  }
})

var Greeting = React.createClass({
  render : function () {
    var username = 'Sam'
    var greeting = 'Hello'
    return (
      username ?
      <span>Hello, {username}</span> :
      <span>Not logged in.</span>
    )
  }
})

ReactDOM.render(
  <Greeting/>,
  document.getElementById('root')
)
