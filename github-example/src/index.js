import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Time from './time'
import './index.css';
import '../public/font-awesome.css'

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
        {getFileName(file)}
        <CommitMessage commit={file.latestCommit} />
        <div className='age'>
          <Time time={file.updated_at} />
        </div>
      </tr>
    )
  }
}
FileListItem.propTypes = {
  file: React.PropTypes.object.isRequired
}

function FileIcon({ file }) {
  let icon = 'fa-file-text-o'
  if (file.type === 'folder') {
    icon = 'fa-folder'
  }
  return (
    <div className='file-icon'>
      <i className={`fa ${icon}`} />
    </div>
  )
}
FileIcon.propTypes = {
  file: React.PropTypes.object.isRequired
}

function getFileName(file) {
  return [
    <FileIcon file={file} key={0}/>,
    <div className='file-name' key={1}>{file.name}</div>
  ]
}
// function returning array is a hacky workaround to the limit of components returning only one element

function CommitMessage ({ commit }) {
  return (
    <div className='commit-message'>{commit.message}</div>
  )
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
