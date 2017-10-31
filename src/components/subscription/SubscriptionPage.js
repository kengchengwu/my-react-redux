import React from 'react';
import PropTypes from 'prop-types';
import {Route,withRouter} from 'react-router-dom';
import SubscriptionHeader from './SubscriptionHeader';
import RatePlanPage from './rateplan/RatePlanPage';
import SubscriberPage from './subscriber/SubscriberPage';
import PaymentMethodPage from './paymentMethod/PaymentMethodPage';
import ConfirmationPage from './confirmation/ConfirmationPage';

class SubscriptionPage extends React.Component{

	render(){
		const {match} = this.props;
		return (
			<div>
				<SubscriptionHeader matchUrl={match.url}/>
				<div className="subscription-body">
					 <Route path={match.url + '/rateplan'}  component={RatePlanPage}/>
					 <Route path={match.url + '/subscriber'}  component={SubscriberPage}/>
					 <Route path={match.url + '/paymentMethod'}  component={PaymentMethodPage}/>
					 <Route path={match.url + '/confirmation'}  component={ConfirmationPage}/>
				</div>
			</div>
		);
	};

	componentDidMount(){
		this.props.history.push(this.props.match.url + '/rateplan');
	};

}


export default withRouter(SubscriptionPage);