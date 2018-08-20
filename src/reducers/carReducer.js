import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * 
 * Importing actionTypes as well as initialStates. Initial state is passed to the reducer as default parameter 
 * to make sure the state is not undefined. In case of action type not being defined or not found the default state is returned 
 * otherwise a new copy of the state is returned. As per the rule, state is immutable. ES 6 spread operator is being used 
 * as well as new syntax Object.assign() being used to create a copy of the state.
 * 
 * @author Deepak Rout <deepakrout@hotmail.com> 
 * @version 1.0
 * 
 */

export default function carReducer(state = initialState.cars, action) {
    switch (action.type) {
        case types.CREATE_CAR_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.car)
            ];

        case types.UPDATE_CAR_SUCCESS:
            return [
                ...state.filter(car => car.id !== action.car.id),
                Object.assign({}, action.car)
            ];
        case types.LOAD_CAR_SUCCESS:
            return action.cars;
        case types.DELETE_CAR_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfCatToDelete = state.findIndex(car => {
                return car.id == action.car;
            });
            newState.splice(indexOfCatToDelete, 1);
            return newState;
        }    
        default:
            return state;

    }
}