import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './HeaderStyles';
import LoadingDots from './LoadingDots';
import NavRouteLink from './NavRouteLink';

const Header = ({loading}) => {
		// debugger;
	return (
		<div style={styles.header}>
			<nav style={styles.nav}>
				<NavRouteLink to="/" label="Home" activeOnlyWhenExact={true}/>
				{" | "}
				<NavRouteLink to="/courses" label="Courses"/>
				{" | "}
				<NavRouteLink to="/about" label="About"/>
				{" | "}
				<NavRouteLink to="/subscription" label="Subscription"/>
				{loading && <LoadingDots interval={100} dots={20}/>}
			</nav>
		</div>
	);
};

Header.propTypes ={
	loading: PropTypes.bool.isRequired
}

export default Header;