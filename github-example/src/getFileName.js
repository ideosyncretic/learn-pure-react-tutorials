import React from 'react';
import FileIcon from './FileIcon'

function getFileName(file) {
  return [
    <FileIcon file={file} key={0}/>,
    <div className='file-name' key={1}>{file.name}</div>
  ]
}
// function returning array is a hacky workaround to the limit of components returning only one element

export default getFileName
