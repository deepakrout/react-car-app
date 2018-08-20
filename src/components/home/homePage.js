import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import * as carActions from '../../actions/carActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CarList from './carListPage';

/**
 * 
 * This is main page/ landing screen of the application. It shows list of Cars.
 * @author Deepak Rout <deepakrout@hotmail.com>
 */

class HomePage extends React.Component {
   
//call parent constructor. required in case of inheritance when using ES6 class and extend.
   constructor(props, context) {
        super(props, context);

        //Local state is maintenained 
        this.state = {
            cars: Object.assign({}, props.cars),
            errors: {},
            saving: false
        };

       //Binding the event methods context to this component in order to avoid it being default bound to the event context. 
       this.redirectToAddCarPage = this.redirectToAddCarPage.bind(this);
  }

  /**
   * 
   */
  redirectToAddCarPage() {
        browserHistory.push('/car');
  }

  render() {
    //Using destructring the props to get the car objects
    const {cars} = this.props;
    return (
      <div id="contentArea" className="jumbotron">
        <h4>ABC Rental Car Co.</h4>
        <br/>
        <h6>Cars Management</h6>
       <br/>
       <br/>    
       <input id="createNewBtn"
              type="submit"
              value="Add New"
              className="btn btn-outline-info float-right"
             onClick={this.redirectToAddCarPage}/>
         <CarList cars = {cars} />    
      </div>
    );
  }
}

HomePage.propTypes = {
    cars: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired 
};

function mapStateToProps(state, ownProps){
    return {
        cars: state.cars
    };
}

function mapDispatchToProp(dispatch){
    return{
       actions: bindActionCreators(carActions,dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProp)(HomePage);
