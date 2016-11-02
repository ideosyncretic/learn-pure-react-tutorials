import React, { Component } from 'react'
import './App.css'
import '../public/font-awesome.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav>
          <NavItem url='/'>Home</NavItem>
          <NavItem url='/about'>About</NavItem>
          <NavItem url='/contact'>Contact</NavItem>
        </Nav>
        <Dialog>
          <Title>This Is Important</Title>
          <Body>Here is some important text or error or something.</Body>
          <Footer>Close</Footer>
        </Dialog>
        <ErrorBox>The world is ending</ErrorBox>
        <Envelope toPerson={person2} fromPerson={person} />
        <CreditCard cardInfo={cardInfo} />
        <Poster posterInfo={posterInfo} />
        <Email emailInfo={emailInfo} />
      </div>
    )
  }
}

class NavItem extends Component {
  render () {
    return (
      <a href={this.props.url}>{this.props.children}</a>
    )
  }
}

function Nav ({ children }) {
  let items = React.Children.toArray(children)
  for (let i = items.length - 1; i >= 1; i--) {
    items.splice(i, 0,
      <span key={i} className='separator'>•</span>
    )
  }

  return <nav className='nav'>{items}</nav>
}


Nav.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName]
    let types = [NavItem]
    let error = null

    React.Children.forEach(prop, function (child) {
      if (types.indexOf(child.type) === -1) {
        error = new Error(`'${componentName}' has incorrrect '${child.type}' child. '${componentName}' children should be of type 'NavItem'.`)
      }
    })

    return error
  }
}

class Title extends Component {
  render () {
    return (
      <div className='dialog-title'>
        <span>{this.props.children}</span>
      </div>
    )
  }
}

class Body extends Component {
  render () {
    return (
      <div className='dialog-body'><p>{this.props.children}</p></div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
      <div className='dialog-button'>
        <button>{this.props.children}</button>
      </div>
    )
  }
}

class Dialog extends Component {
  render () {
    return (
      <div className='dialog'>{this.props.children}</div>
    )
  }
}
Dialog.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName]
    let types = [Title, Body, Footer]
    let error = null

    React.Children.forEach(prop, function (child) {
      if (types.indexOf(child.type) === -1) {
        error = new Error(`'${componentName}' has incorrect '${child.type}' child. '${componentName}' children should be of types 'Title', 'Body', and 'Footer'.`);
      }
    })

    return error
  }
}

class ErrorBox extends Component {
  render () {
    return (
      <div className='error-box'>
        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
        {this.props.children}
      </div>
    )
  }
}

const person = {
  name: 'Mr. Sender',
  address: {
    line1: '123 Fake St.',
    line2: 'Boston, MA 02118'
  }
}

const person2 = {
  name: 'Mrs. Receiver',
  address: {
    line1: '123 Fake St.',
    line2: 'San Francisco, CA 94101'
  }
}

const cardInfo = {
  name: 'Cardholder Name',
  expiration: '08/19',
  number: '1234 5678 8765 4321',
  bank: 'Big Bank, Inc.'
}

const posterInfo = {
  image: 'https://facebook.github.io/react/img/logo_og.png',
  title: 'REACT',
  text: 'The best thing since jQuery, probably.'
}

const emailInfo = {
  sender: 'React Newsletter',
  subject: 'Issue 36',
  date: 'Jul 15',
  message: 'Read this issue on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX'
}


const AddressLabel = React.createClass({
  propTypes: {
    person: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      address: React.PropTypes.shape({
        line1: React.PropTypes.string.isRequired,
        line2: React.PropTypes.string.isRequired
      })
    })
  },
  render () {
    let {name, address} = this.props.person
    return (
      <div className='address-label'>
        <span>{name}</span>
        <br/>
        <span>{address.line1}</span>
        <br/>
        <span>{address.line2}</span>
      </div>
    )
  }
})

const Envelope = React.createClass({
  render () {
    return (
      <div className='envelope'>
        <div className='sender'>
          <AddressLabel person={this.props.fromPerson} />
        </div>
        <div className='receiver'>
          <AddressLabel person={this.props.toPerson} />
        </div>
        <div className='stamp-area'>
          <div className='stamp'>
            <span id='stamp'><strong>STAMP</strong></span>
          </div>
        </div>
      </div>
    )
  }
})

const CreditCard = React.createClass({
  render () {
    let {name, expiration, number, bank} = this.props.cardInfo
    let serial = number.substr(0, 4)
    return (
      <div className='credit-card'>
        <div className='bank'>
          <strong>{bank}</strong>
        </div>
        <div className='number'>
          <span className='monospaced'>{number}</span>
          <br/>
          <span id='serial'>{serial}</span>
        </div>
        <div className='expiration'>
          <div id='valid'>
            VALID THRU
          </div>
          <div className='monospaced' id='expiration-date'>
            {expiration}
          </div>
        </div>
        <div className='name'>
          {name}
        </div>
      </div>
    )
  }
})

const Poster = React.createClass({
  render() {
    let {title, image, text} = this.props.posterInfo
    return (
      <div className='poster'>
        <div>
          <img src={image} alt='react-logo' className='image' />
        </div>
        <span className='title'>{title}</span>
        <span className='text'>{text}</span>
      </div>
    )
  }
})

const Email = React.createClass({
  render() {
    let {sender, subject, date, message} = this.props.emailInfo
    return (
      <div className='email'>
        <div className='actions'>
          <input type='checkbox' />
          <img id='pushpin' src='http://www.freeiconspng.com/uploads/push-pin-icon-25.png' alt='pushpin' />
        </div>
        <div className='email-sender flex-col'>
          <span className='header'>{sender}</span>
          <br/>
          {sender + ' ' + subject + ' - ' + date}
        </div>
        <div className='message flex-col'>
          <span className='header'>{sender} - {subject}</span>
          <br/>
          {message}
        </div>
        <div className='date flex-col'>
          <span className='header'>{date}</span>
        </div>
      </div>
    )
  }
})

export default App
