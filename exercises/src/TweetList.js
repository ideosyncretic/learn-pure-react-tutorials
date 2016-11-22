import React, {Component} from 'react'
import Tweet from './Tweet.js'
import tweets from './tweets.js'

class TweetList extends Component {
  render () {
    let tweets = this.props.tweets
    return (
      <div className='tweet-list'>
        {tweets.map(
          tweet => ( <Tweet key={tweet.id} tweet={tweet} /> )
        )}
      </div>
    )
  }
}

export default TweetList
