// Reducers are functions that return a piece of state.
const students = [
	{
		name: "JASON",
		seat: 5
	},
	{
		name: "CHRIS",
		seat: 6
	},
	{
		name: "SAIF",
		seat: 7
	},
	{
		name: "TAYLOR",
		seat: 8
	}
	];

// all reducer functions have 2 params.
// 1: current state
// 1b: usually, you will want to provide a default sate
// 2: info that came from the action
export default function(state = students, action){
	if(action.type === 'ADD_STUDENT'){
		console.log(action);
		return action.payload;
	}
	return state;
}