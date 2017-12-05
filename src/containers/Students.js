import React, { Component } from 'react';
// we need some glue! this component/container needs to know about the store(redux)
// so we can use its state and update it if needed. To accomplish this, 
// we can use the connect method from react-redux. The glue between react and redux
import { connect } from 'react-redux';
// we need bindActionCreators from redux, so that we can get the actions
// to dispatch to the reducers.
import { bindActionCreators } from 'redux';

// go get the AddStudent action so we can use it;
import AddStudent from '../actions/AddStudent';

class Students extends Component{

	constructor(){
		super();
		this.addNewStudent = this.addNewStudent.bind(this);
	}

	addNewStudent(){
		const name = document.getElementById('student-name').value;
		// console.log(e.target.value);
		this.props.addStudent(name);
	}

	render(){
		console.log(this.props);
		var studentArray = this.props.studentToDisplay.map((student,index)=>{
			return(<li key={index}>{student.name} Sits in seat {student.seat}</li>)
		});
		return(
			<div>
				<input id="student-name" type="text" placeholder="Name of student" />
				<button onClick={this.addNewStudent}>Add student</button>
				<h1>Students Component</h1>
				{studentArray}
			</div>
		)
	}
}

// We need a function to map the redux state to THIS components props.
function mapStateToProps(state){
	// the state parameter IS THE ROOT REDUCER
	// this function will return an object
	// property will be the props IN THIS component
	// the value will be the piece of state from the reducer
	return{
		studentToDisplay: state.students
	}
}

function mapDispatchToProps(dispatch){
	// bindActionCreators takes an object as first prem.;
	// property is the local prop name (this.props.aaaa)
	// value is the callback
	//2nd param is the dispatch
	return bindActionCreators(
		{
			addStudent: AddStudent
		}, 
		dispatch
	);
}

// export default Students;
// in containers (components that need to know about redux), we don't export the component,
// we export connect. We pass connect a function, and we pass the component
// export default connect(mapStateToProps)(Students);

// when exporting connect, state ALWAYS comes first.
// when exporting connected, action comes second
export default connect(mapStateToProps,mapDispatchToProps)(Students)
