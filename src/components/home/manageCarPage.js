import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as carActions from '../../actions/carActions';
import CarForm from './carForm';
import ViewCarPage from './viewCar';
import toastr from 'toastr';

/**
 * This container componenet takes care of managing the view/add/update of the car. Based on the route.location determines what 
 * view to show. Local state is being intialized in the constructor.
 * 
 * @author Deepak Rout <deepakrout@hotmil.com>
 * @version 1.0
 */

class ManageCarPage extends React.Component {
  constructor(props, context) {
       
    //call parent constructor. required in case of inheritance when using ES6 class and extend.
    super(props, context);

    //initialize local state
    this.state = {
      car: Object.assign({}, props.car),
      errors: {},
      saving: false
    };

    /**
     * Binding the event methods context to this component in order to avoid it being default bound to the event context.
     */
    this.updateCarState = this.updateCarState.bind(this);
    this.saveCar = this.saveCar.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.car.id != nextProps.car.id) {
      // Necessary to populate form when existing cars is loaded directly.
      this.setState({car: Object.assign({}, nextProps.car)});
    }
  }

  /**
   * When input item changes state is updated
   * @param {event} event 
   */
  updateCarState(event) {
    const field = event.target.name;
    let car = Object.assign({}, this.state.car);
    car[field] = event.target.value;
    return this.setState({car: car});
  }

  /**
   * Client side validation being enfoced. More validation rules can be added. Before saving the car 
   * this is called to validate form fields.
   */
  carFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.car.manufacturer.length < 3) {
      errors.title = 'Manufacturer must be at least 3 characters.';
      formIsValid = false;
    }
    /** if invalid errors state is set to error message */
    this.setState({errors: errors});
    return formIsValid;
  }

  /**
   * saveEvent on save button onClick event 
   * @param {event} event 
   */
  saveCar(event) {
    event.preventDefault();
    
    //Validate the form
    if (!this.carFormIsValid()) {
      return;
    }

    //Mark saving state to true so  that user feedback can be displayed about the progress
    this.setState({saving: true});

    //call the action.saveCar 
    this.props.actions.saveCar(this.state.car)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  /**
   * redirect user to list page once save is success
   */
  redirect() {
    this.setState({saving: false});
    toastr.success('Car saved');
    this.context.router.push('/cars');
  }

  render() {
    
    // Check for incoming route location
    const calledFrom = this.props.location.pathname.split("/")[1];
    return (
        <div>
            {(calledFrom === "edit-car" || calledFrom === "car") ? (
                <CarForm
                onChange={this.updateCarState}
                onSave={this.saveCar}
                car={this.state.car}
                errors={this.state.errors}
                saving={this.state.saving}/>
            ) : (
                <ViewCarPage car={this.state.car}/>
             )}
        </div>
      
    );
  }
}

//this rule enforced only during development 
ManageCarPage.propTypes = {
  /**
   * car prop is required in order to show the contents of the car detail 
   * @ignore
   */
  car: PropTypes.object.isRequired,
   /**
   * action prop is required in order to show the contents of the car detail 
   * @ignore
   */
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageCarPage.contextTypes = {
  router: PropTypes.object
};

//Connvenient function to get a car object by car id.
function getCarById(cars, id) {
  const locCar = cars.filter(car => car.id == id);
  if (locCar) return locCar[0]; //since filter returns an array, have to grab the first.
  return null;
}

/**
 * Subscribing to store update. if the car id is passed in ownProps selecting the specific car
 * 
 * @param {*} state 
 * @param {*} ownProps 
 */
function mapStateToProps(state, ownProps) {
  const carId = ownProps.params.id; // from the path `/car/:id`
  let car = {id: '', manufacturer: '', make: '', model: '', year: ''};
  if (carId && state.cars.length > 0) {
    car = getCarById(state.cars, carId);
  }
  return {
    car: car
  };
}

/**
 * Binding car action to the despatcher creating more reusablity
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(carActions, dispatch)
  };
}

// connecting the componenet to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(ManageCarPage);
