import React from 'react';
import PropTypes from 'prop-types';

class SubscriberPage extends React.Component{

	constructor(props, context){
		super(props, context);
		this.toPrev = this.toPrev.bind(this);
		this.toNext = this.toNext.bind(this);
	}

	toPrev(){
		console.log(this.props.history);
 		this.props.history.push('rateplan');
	}

	toNext(){
		 this.props.history.push('paymentMethod');
	}

	render(){
		return (
			<div>
				<p>SubscriberPage</p>
				<div className="nav-actions">
					<button className="btn btn-primary" onClick={this.toPrev}>Prev</button>
					<button className="btn btn-primary" onClick={this.toNext}>Next</button>
				</div>
			</div>
		);
	};

}


export default SubscriberPage;