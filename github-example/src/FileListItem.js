import React, {Component} from 'react';
import getFileName from './getFileName.js'
import CommitMessage from './CommitMessage.js'
import Time from './time'

class FileListItem extends Component {
  render () {
    var {file} = this.props
    return (
      <tr className='file-list-item'>
        <td>{getFileName(file)}</td>
        <td><CommitMessage commit={file.latestCommit} /></td>
        <td>
          <div className='age'>
            <Time time={file.updated_at} />
          </div>
        </td>
      </tr>
    )
  }
}
FileListItem.propTypes = {
  file: React.PropTypes.object.isRequired
}

export default FileListItem
