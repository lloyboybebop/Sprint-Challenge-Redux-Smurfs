import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import papaSmurf from './reducers';/* You need some sort of reducer */ './reducers';

const store = createStore(
  papaSmurf, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(thunk, logger/* be sure to throw in the proper middlewares here*/)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
