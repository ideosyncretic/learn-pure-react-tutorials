import React, {Component} from 'react'
import stories from './stories'
import Story from './Story'

class StoriesList extends Component {
  render () {
    return (
      <div>
        {stories.map(
          story => (
            <Story key={stories.indexOf(story)} story={story} number={stories.indexOf(story) + 1}/>
          )
        )}
      </div>
    )
  }
}
StoriesList.propTypes = {
  stories: React.PropTypes.array
}

export default StoriesList
