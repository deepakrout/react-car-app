import React,{PropTypes}  from 'react';
import Header from "./common/Header";
import {connect} from 'react-redux';

/**
 * Applicaion root componenet App. This is being used in routes as parent/root of all other componenets. The Header componenet 
 * is being used to show the navbar style menu links to navigate between various pages. Also it shows a loading component as (.)
 * dots while any ajax call in progress.
 * 
 * @author Deepak Rout <deepakrout@hotmail.com>
 */

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
               <Header loading={this.props.loading} />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    /**
     * Children prop is required in order to show the contents or child elements 
     * @ignore
     */
    children: PropTypes.object.isRequired,
    /**
     * Loading prop is required in order to loading dot while the call is in progress. 
     * @ignore
     */
    loading: PropTypes.bool.isRequired
};

/**
 * Subscribing to store update. 
 * @param {*} state 
 * @param {*} ownProps 
 */
function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

/**
 * connecting the componenet to the redux store
 */
export default connect(mapStateToProps)(App);
