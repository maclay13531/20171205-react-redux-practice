// This is our master reducer file 
// It doesn't manage any particular piece state
// it simply containes all the individual pieces of state/the reducers
// IE, a reducer contains a piece of state, the root reducer contains all reducers

// I (the rootreducer), neither know nor care about REACT.
// I am like Lichtenstien, independent of your silly empire

import { combineReducers } from 'redux';

// import each indivudal reducer
import StudentReducer from './StudentReducer';

// build the root reducer, using combinereducers which we imported from redux
// combineReducers takes 1arg, an object
const rootReducer = combineReducers({
	// the name of the state will be the property used by react
	// the value will be the reducer file import
	students: StudentReducer
})

export default rootReducer;