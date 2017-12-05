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
import rootReducers from './reducers/index';

// Make a store for redux to use. Use createStore brought in above
// pass it reducers, which is the export of the rootreducer file
// rootReducer file is all the little reducers together
const theStore = createStore(rootReducers);

// provider is the component that makes connect work(inside the containers)
// it takes a prop of store, which is the redux store.
// the redux store was made by createstore and giving it the rootreducer
ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
