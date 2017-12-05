import React, { Component } from 'react';
// we need some glue! this component/container needs to know about the store(redux)
// so we can use its state and update it if needed. To accomplish this, 
// we can use the connect method from react-redux. The glue between react and redux
import { connect } from 'react-redux';

class Students extends Component{
	render(){
		console.log(this.props.studentToDisplay);
		var studentArray = this.props.studentToDisplay.map((student,index)=>{
			return(<li key={index}>{student.name} Sits in seat {student.seat}</li>)
		});
		return(
			<div>
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

// export default Students;
// in containers (components that need to know about redux), we don't export the component,
// we export connect. We pass connect a function, and we pass the component
export default connect(mapStateToProps)(Students);