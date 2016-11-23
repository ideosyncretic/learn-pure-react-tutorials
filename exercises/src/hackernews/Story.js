import React, {Component} from 'react'
import Header from './Header'
import Details from './Details'

class Story extends Component {
  render () {
    let {story} = this.props
    return (
      <tr className='story'>
        <td className='row-number'><span className='story-icon'>▲</span></td>
        <td>
        <Header title={story.title} source={story.source}/>
        <Details points={story.points} user={story.user} timestamp={story.timestamp} comments={story.comments} />
        </td>
      </tr>
    )
  }
}
Story.propTypes = {
  story: React.PropTypes.object.isRequired
}

export default Story
