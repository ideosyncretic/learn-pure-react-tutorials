import React from 'react'
import moment from 'moment'

const Tweet = React.createClass({
  propTypes: {
    tweet: React.PropTypes.object
  },
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
  propTypes: {
    hash: React.PropTypes.string.isRequired
  },
  render: function () {
    var hash = this.props.hash
    var url = `https://www.gravatar.com/avatar/${hash}`
    return (
      <img src={url} className='avatar' alt='avatar' />
    )
  }
})

var Message = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div className='message'>
        {this.props.text}
      </div>
    )
  }
})

var NameWithHandle = React.createClass({
  propTypes: {
    author: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      handle: React.PropTypes.string.isRequired,
    })
  },
  render: function () {
    var { name, handle } = this.props.author
    return (
      <span className='name-with-handle'><span className='name'>{name}</span> <span className='handle'>@{handle}</span></span>
    )
  }
})

var Time = React.createClass({
  propTypes: {
    time: React.PropTypes.string.isRequired
  },
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
  propTypes: {
    count: React.PropTypes.number.isRequired
  },
  render: function () {
    var {count} = this.props
    return (
      <span className='like-button'>
        <i className='fa fa-heart'/>
        {count > 0 ?
        <span className='like-count'>{count}</span>
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

export default Tweet
