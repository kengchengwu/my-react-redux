import React from 'react';
import PropTypes from 'prop-types';

class PaymentMethodPage extends React.Component{
	constructor(props, context){
		super(props, context);
		this.toPrev = this.toPrev.bind(this);
		this.toNext = this.toNext.bind(this);
	}

	toPrev(){
 		this.props.history.push('subscriber');
	}

	toNext(){
		 this.props.history.push('confirmation');
	}

	render(){
		return (
			<div>
				<p>PaymentMethodPage</p>
				<div className="nav-actions">
					<button className="btn btn-primary" onClick={this.toPrev}>Prev</button>
					<button className="btn btn-primary" onClick={this.toNext}>Next</button>
				</div>
			</div>
		);
	};

}


export default PaymentMethodPage;