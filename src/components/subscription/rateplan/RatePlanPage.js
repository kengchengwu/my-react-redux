import React from 'react';
import PropTypes from 'prop-types';


class RatePlanPage extends React.Component{

	constructor(props, context){
		super(props, context);
		this.toNext = this.toNext.bind(this);
	}

	toNext(){
		 this.props.history.push('subscriber');
	}

	render(){
		return (
			<div>
				<p>RatePlan</p>
				<div className="nav-actions">
					<button className="btn btn-primary" onClick={this.toNext}>Next</button>
				</div>
			</div>
		);
	};

}


export default RatePlanPage;