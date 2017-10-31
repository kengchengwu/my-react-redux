import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import * as courseActions from '../../actions/courseActions';
import toastr from 'toastr';

class CourseList extends React.Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			test:true
		}
	}

	render(){
		const {courses} = this.props;

		return (
			<table className="table">
				<thead>
					<tr>
						<th>&nbsp;</th>
						<th>Title</th>
						<th>Author</th>
						<th>Category</th>
						<th>Length</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					 {courses.map(course => 
					 	<CourseListRow key={course.id} course={course}/>
					 )}
				</tbody>
			</table>
		);
	};
}

CourseList.propTypes = {
	courses: PropTypes.array.isRequired
};

export default CourseList;