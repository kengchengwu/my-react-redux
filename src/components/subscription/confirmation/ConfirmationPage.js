import React from 'react';
import PropTypes from 'prop-types';

class ConfirmationPage extends React.Component{

	constructor(props, context){
		super(props, context);
		this.toPrev = this.toPrev.bind(this);
		this.toNext = this.toNext.bind(this);
	}

	toPrev(){
 		this.props.history.push('paymentMethod');
	}

	toNext(){
		 // this.props.history.push('./confirmation');
	}

	render(){
		return (
			<div>
				<p>ConfirmationPage</p>
				<div className="nav-actions">
					<button className="btn btn-primary" onClick={this.toPrev}>Prev</button>
					<button className="btn btn-primary" onClick={this.toNext}>Next</button>
				</div>
			</div>
		);
	};

}


export default ConfirmationPage;