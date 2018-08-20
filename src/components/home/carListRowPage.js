import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as carActions from '../../actions/carActions';
import toastr from 'toastr';
/**
 * 
 * This component is used to diplays each row of the table tr element of the CarlList.
 * Also it handles delete event of the item being deleted. 
 * @author Deepak Rout <deepakrout@hotmail.com>
 * 
 */

class CarListRow extends React.Component {
    constructor(props, context){
        super(props,context);
        this.state = {
            showModal: false
        };
        this.deleteCar = this.deleteCar.bind(this);
    }

    deleteCar(e){
        const {car} = this.props;
        this.props.actions.deleteCar(car.id)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
        });
    }

    redirect(){
        toastr.success('Car Deleted.');
        this.context.router.push('/cars');
    }

    render() {
        const {car} = this.props;
        return (
            <tr key={car.id}>
                <td><Link to={'/view-car/' + car.id}>{car.manufacturer}</Link></td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td><Link to={'/edit-car/' + car.id}><FontAwesomeIcon icon="pencil-alt" /></Link></td>
                <td><span onClick={this.deleteCar}><FontAwesomeIcon icon="trash-alt" /></span></td>
            </tr>
        );
    }

}

CarListRow.propTypes = {
    car: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};
  
  //Pull in the React Router context so router is available on this.context.router.
CarListRow.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps){
    return {
        car: ownProps.car
    }
}

function mapDispatchToProp(dispatch){
    return{
       actions: bindActionCreators(carActions,dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProp)(CarListRow);



