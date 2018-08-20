import React, {PropTypes}  from 'react';
import DisplayInput from '../common/DisplayInput';
/**
 * This component used to a read only form view of each car. It uses DisplayInput component in order to achive the 
 * read only status.
 * 
 * @author Deepak Rout <deepakrout@hotmail.com>
 * @version 1.0
 */

class ViewCarPage extends React.Component{
    constructor(props, context){
        /**
         * call parent constructor. required in case of inheritance when using ES6 class and extend.
         */
        super(props,context);
        /**
         * Binding the event method context to this component otherwise it will by default bound to the event context.
         */
        this.onCloseView = this.onCloseView.bind(this);
    }

    /**
     * When back button is pressed we just redirect the page to the list page.
     * 
     * @param {*} e - event object
     */
    onCloseView(e){
        this.context.router.push('/cars');
    }

    /**
     * render method 
     */
    render(){
        /**
         * ES6 destructring the props to get the car objects
         */
        const {car} = this.props;
        return (
            <div className="jumbotron">
              <h6>View Car Details</h6>
              <form>
                <DisplayInput
                    name="manufacturer"
                    label="Manufacturer"
                    value={car.manufacturer}/>
        
                <DisplayInput
                    name="make"
                    label="Make"
                    value={car.make}/>
        
                <DisplayInput
                    name="model"
                    label="Model"
                    value={car.model}/>
        
                <DisplayInput
                    name="year"
                    label="Year"
                    value={car.year}/>    
        
                <input
                    type="submit"
                    value={'Back'}
                    className="btn btn-primary"
                    onClick={this.onCloseView}/>
              </form>
          </div>
        );
    }

}

ViewCarPage.propTypes = {
/**
 * car prop is required in order to show the contents of the car detail 
 * @ignore
 */
  car: React.PropTypes.object.isRequired
};

/**
 * Conext is being brought is to get handle to router object in order to navigate using routes
 */
ViewCarPage.contextTypes = {
    router: PropTypes.object
};

export default ViewCarPage;
