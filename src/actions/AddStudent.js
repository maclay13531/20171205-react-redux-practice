

// anaction exports a function
// that function must return an object
// that object must have a prop of type

export default function addStudent(studentName){
	console.log("ADD students action is running");
	console.log(studentName);
	return{
		type: 'ADD_STUDENT',
		payload: studentName
	}
}