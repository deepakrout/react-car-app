import React, {PropTypes} from 'react';
import CarListRow from './carListRowPage';
/**
 * 
 * Component to show the list of cars. cars prop is required. 
 * Usage: <CarList cars = {cars} />  
 * @param {*} cars 
 * 
 * @author Deepak Rout <deepakrout@hotmail.com>
 */
const CarList = ({cars}) => {
  return (
    <table className="table table-hover table-striped">
      <thead className="thead-light">
      <tr>
        <th>Manufacturer</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
      </tr>
      </thead>
      <tbody>
        {cars.map(car =>
            <CarListRow key={car.id} car={car}/>
        )}
      </tbody>
    </table>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired
};

export default CarList;
