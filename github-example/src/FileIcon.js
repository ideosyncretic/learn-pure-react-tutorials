import React from 'react';

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

export default FileIcon
