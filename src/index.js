/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router';
// import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/main.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import App from './components/App.jsx';
// import { syncHistoryWithStore } from 'react-router-redux';

// const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store);

render(
  <App />,
  document.getElementById('app')
);
