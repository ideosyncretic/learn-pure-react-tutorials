import React, {Component} from 'react'
import Header from './Header'
import Details from './Details'

class Story extends Component {
  render () {
    let {number, story} = this.props
    return (
      <div className='story'>
        <Header number={number} title={story.title} source={story.source}/>
        <Details points={story.points} user={story.user} timestamp={story.timestamp} comments={story.comments} />
      </div>
    )
  }
}
Story.propTypes = {
  story: React.PropTypes.object.isRequired
}

export default Story
