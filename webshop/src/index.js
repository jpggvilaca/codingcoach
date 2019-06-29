/* UNCOMMENT all the commented lines below to enable redux */

import React from 'react';
import { render } from 'react-dom';
// import { Provider } from "react-redux";

// import configureStore from './store';

import App from './App';

import './index.css';

// const store = configureStore();

render(
  // <Provider store={store}>
  <App />,
  // </Provider>
  document.getElementById('app')
);
