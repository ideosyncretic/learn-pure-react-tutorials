import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../public/font-awesome.css'
import FileList from './FileList.js'
import testFiles from './testFiles.js'

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById('root')
);
