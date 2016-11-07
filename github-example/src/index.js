import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

class FileListItem extends Component {
  render () {
    var {file} = this.props
    return (
      <tr className='file-list-item'>
        <td className='file-name'>{file.name}</td>
      </tr>
    )
  }
}
FileListItem.propTypes = {
  file: React.PropTypes.object.isRequired
}

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2016-07-18 21:24:00',
    latestCommit: {
      message: 'Added a readme'
    }
  }
]

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById('root')
);
