import React, {Component} from 'react'
import Nav from './Nav'
import stories from './stories'
import Story from './Story'
import './hackernews.css'

class StoriesList extends Component {
  render () {
    return (
      <div>
        <Nav />
        <table className='stories-list'>
          <tbody>
            {stories.map(
              story => (
                <Story key={stories.indexOf(story)} story={story}/>
              )
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
StoriesList.propTypes = {
  stories: React.PropTypes.array
}

export default StoriesList
