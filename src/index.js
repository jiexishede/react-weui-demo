import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import 'babel-polyfill';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './react-weui.css'

import FastClick from 'fastclick';

import './style.less'


window.addEventListener('load', () => {
  FastClick.attach(document.body);
});


ReactDOM.render(<App />, document.getElementById('container'));
registerServiceWorker();
