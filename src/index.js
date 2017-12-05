import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import the store from redux so we can use it. The store is redux
import { createStore } from 'redux';

// import the provider component from react-redux so that react and redux can talk
// They talk through connect, butthe provider component makes that happen
import { Provider } from 'react-redux';

// import the main reducer (rootReducer) so that we can hand it to the store
import reducers from './reducers/index';

ReactDOM.render(<App />, document.getElementById('root'));
