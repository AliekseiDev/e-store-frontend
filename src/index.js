import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import '$icons';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import reducer from '$reducers';


let middleware = [thunk];
/* if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware]
} */
let preloadedState = {};
const store = createStore(
  reducer,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>, 
  document.getElementById('root'));