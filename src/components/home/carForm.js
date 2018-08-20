import React from 'react';
import TextInput from '../common/TextInput';
/**
 * Component car form add or edit a car. Using reusable component TextInput
 * 
 * @param {object}  car
 * @param {event}   onSave
 * @param {event}   onChange
 * @param {boolean} saving
 * @param {string}  errors
 * 
 * @author Deepak Rout
 * 
 */

const CarForm = ({car, onSave, onChange, saving, errors}) => {
  return (
      <div className="jumbotron">
        <h6>Create/Edit Car Details</h6>
        <form>
            <TextInput
                name="manufacturer"
                label="Manufacturer"
                value={car.manufacturer}
                placeholder="Enter car manufacturer"
                onChange={onChange}
                error={errors.title}/>

            <TextInput
                name="make"
                label="Make"
                value={car.make}
                placeholder="Enter car make"
                onChange={onChange}
                error={errors.make}/>

            <TextInput
                name="model"
                label="Model"
                value={car.model}
                placeholder="Enter model"
                onChange={onChange}
                error={errors.model}/>

            <TextInput
                name="year"
                label="Year"
                value={car.year}
                placeholder="Enter year of making"
                onChange={onChange}
                error={errors.year}/>    

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    </div>
  );
};

CarForm.propTypes = {
 /**
   * car prop is required in order to show the contents of the car detail 
   * @ignore
  */
  car: React.PropTypes.object.isRequired,
 /**
   * conSave event is required in order take action when save is clicked
   * @ignore
  */
  onSave: React.PropTypes.func.isRequired,
  /**
   * conChange event is required in order take action when input item changed
   * @ignore
  */
  onChange: React.PropTypes.func.isRequired,
  /**
   * saving flag is required ito determine saving state.
   * @ignore
  */
  saving: React.PropTypes.bool,
  /**
   * errors flag is required ito determine error state.
   * @ignore
  */
  errors: React.PropTypes.object
};

export default CarForm;
