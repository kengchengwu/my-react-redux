import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component{
	constructor(props, context){
		super(props, context);

		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
	}

	redirectToAddCoursePage() {
	    this.props.history.push('/course');
	  }

	render(){
		// debugger;

		const {courses} = this.props;

		return (
			<div>
				<h1>Courses</h1>
				<input type="submit"
					value="Add Course"
					className="btn btn-primary"
					onClick={this.redirectToAddCoursePage}/>
				<CourseList courses={courses}/>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	actions: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired,
	 history: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
	// debugger;
	return{
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default  withRouter(connectedStateAndProps(CoursesPage));

// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);