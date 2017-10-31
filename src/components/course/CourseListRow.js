import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as courseActions from '../../actions/courseActions';
import toastr from 'toastr';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CourseListRow extends React.Component{
	deleteCourse(courseId, event){
		event.preventDefault();
		this.props.actions.deleteCourse(courseId).then(function(){
			toastr.success('Course Deleted');
		});
	}

	render(){
		const {course} = this.props;

		return (
			<tr>
				<td><a href={course.watchHref} target="_blank">Wath</a></td>
				<td><Link to={'/course/'+course.id}>{course.title}</Link></td>
				<td>{course.authorId}</td>
				<td>{course.category}</td>
				<td>{course.length}</td>
				<td><a name={"test"+course.id} href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
			</tr>
		);
	};
};

CourseListRow.PropTypes = {
	course: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
	// debugger;
	return{
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CourseListRow);
