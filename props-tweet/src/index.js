import moment from 'moment'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

var Tweet = React.createClass({
  render: function () {
    // refactoring using ES6 destructuring
    var {tweet} = this.props
    // take this.props.tweet and assign it to var tweet
    return (
      <div className='tweet'>
        <Avatar hash={tweet.gravatar} />
        <div className='content'>
          <NameWithHandle author={tweet.author} />
          <Time time={tweet.timestamp} />
          <Message text={tweet.message} />
          <div className='buttons'>
            <ReplyButton/>
            <RetweetButton count={tweet.retweets}/>
            <LikeButton count={tweet.likes}/>
            <MoreOptionsButton/>
          </div>
        </div>
      </div>
    )
  }
})

var Avatar = React.createClass({
  render: function () {
    var hash = this.props.hash
    var url = `https://www.gravatar.com/avatar/${hash}`
    return (
      <img src={url} className='avatar' alt='avatar' />
    )
  }
})

var Message = React.createClass({
  render: function () {
    return (
      <div className='message'>
        {this.props.text}
      </div>
    )
  }
})

var NameWithHandle = React.createClass({
  render: function () {
    var { name, handle } = this.props.author
    return (
      <span className='name-with-handle'><span className='name'>{name}</span> <span className='handle'>@{handle}</span></span>
    )
  }
})

var Time = React.createClass({
  // outside of render you can put another function
  computeTimeString: function () {
    return moment(this.props.time).fromNow()
  }, // comma, don't forget!
  render: function () {
    return (
      // here be expressions, evaluating to a value
      <span className='time'>{this.computeTimeString()}</span>
    )
  }
})

var ReplyButton = React.createClass({
  render: function () {
    return (
      <i className='fa fa-reply reply-button' />
    )
  }
})

var RetweetButton = React.createClass({
  getCount: function () {
    if (this.props.count > 0) {
      return (
        <span className="retweet-count">
          {this.props.count}
        </span>
      )
    } else {
      return null
    }
  },
  render: function () {
    return (
      <span className="retweet-button">
        <i className='fa fa-retweet'/>
        {this.getCount()}
      </span>
    )
  }
})

var LikeButton = React.createClass({
  render: function () {
    var {count} = this.props
    return (
      <span className="like-button">
        <i className='fa fa-heart'/>
        {count > 0 ?
        <span className="like-count">{count}</span>
        : null}
      </span>
    )
  }
})

var MoreOptionsButton = React.createClass({
  render: function () {
    return (
      <i className='fa fa-ellipsis-h more-options-button' />
    )
  }
})

var testTweet = {
  message: 'Something about cats.',
  gravatar: 'xyz',
  author: {
    handle: 'catperson',
    name: 'Cat Man'
  },
  likes: 5,
  retweets: 2,
  timestamp: '2016-09-08 21:24:37'
}

ReactDOM.render(
  <Tweet tweet={testTweet} />,
  document.querySelector('#root')
)
