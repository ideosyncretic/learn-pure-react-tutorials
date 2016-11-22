import React, {Component} from 'react';
import FileListItem from './FileListItem.js'

class FileList extends Component {
  render () {
    let files = this.props.files
    return (
      <table className='file-list'>
        <tbody>
          {files.map(file => (
            <FileListItem key={file.id} file={file}/>
          ))}
        </tbody>
      </table>
    )
  }
}
FileList.propTypes = {
  files: React.PropTypes.array
}

export default FileList
