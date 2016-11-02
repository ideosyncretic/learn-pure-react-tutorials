import React from 'react'
import ReactDOM from 'react-dom'

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>
        <Hello/><World/>!
      </div>
    )
  }
})

var Hello = React.createClass({
  render: function () {
    return (<span>Hello</span>)
  }
})

var World = React.createClass({
  render: function () {
    return (<span>World</span>)
  }
})

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root')
)
