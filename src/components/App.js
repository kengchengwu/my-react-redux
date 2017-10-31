//This compoment handles the App template used on every page
import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage';
import SubscriptionPage from './subscription/SubscriptionPage';
import styles from './AppStyles.js';
import {connect} from  'react-redux';

class App extends React.Component {
  render () {
    return (
    	<div className="container-fluid">
    		<Header
    			loading={this.props.loading}
    		/>
            <div style={styles.body}>
        		<Route exact path="/" component={HomePage}/>
        		<Route path="/courses" component={CoursesPage}/>
        		<Route path="/course/:id" component={ManageCoursePage}/>
                <Route path="/course" component={ManageCoursePage} exact />
        		<Route path="/about" component={AboutPage}/>
                <Route path="/subscription" component={SubscriptionPage}/>
            </div>
    	</div>
    );
  }
}

App.propTypes = {
	loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps){
    // debugger;
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);