import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

const NavRouteLabel = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <span className={match ? 'nav-label-active' : 'nav-label'}>{label}</span>
  )}/>
)


class SubscriptionHeader extends React.Component{

	render(){
		const {matchUrl} = this.props;
		return (
			<div className="subscription-header">
				<nav>
					<NavRouteLabel to={matchUrl+'/rateplan'} label="rate plan"/>
					{" | "}
					<NavRouteLabel to={matchUrl+'/subscriber'} label="subscriber"/>
					{" | "}
					<NavRouteLabel to={matchUrl+'/paymentMethod'} label="payment method"/>
					{" | "}
					<NavRouteLabel to={matchUrl+'/confirmation'} label="confirmation"/>
				</nav>
			</div>
		);
	};

}


export default SubscriptionHeader;