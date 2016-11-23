import React, {Component} from 'react'
import Tweet from './Tweet.js'
import tweets from './tweets.js'
import './tweet.css'

class TweetList extends Component {
  render () {
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
