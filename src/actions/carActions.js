import * as types from './actionTypes';
import CarsApi from '../api/carsApi';  //This can be switch to mock api just change the from in the import
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadCarSuccess(cars) {
    return {
        type: types.LOAD_CAR_SUCCESS,
       cars
    };
}

export function loadCars() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CarsApi.getAllCars().then(cars => {
            dispatch(loadCarSuccess(cars));
        }).catch(error => {
            throw (error);
        });
    };
}

export function createCarSuccess(car) {
    return {
        type: types.CREATE_CAR_SUCCESS,
        car
    };
}

export function updateCarSuccess(car) {
    return {
        type: types.UPDATE_CAR_SUCCESS,
        car
    };
}

export function saveCar(car) {
    return function (dispatch, getState) {
         dispatch(beginAjaxCall());
        return CarsApi.saveCar(car).then(car => {
            car.id ? dispatch(updateCarSuccess(car)) :
                dispatch(createCarSuccess(car));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw (error);
        });
    };
}

export function deleteCarSuccess(car) {
    return {
        type: types.DELETE_CAR_SUCCESS,
        car
    };
}

export function deleteCar(car) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CarsApi.deleteCar(car).then(() => {
            dispatch(deleteCarSuccess(car));
            return;
        }).catch(error => {
            dispatch(ajaxCallError());
            throw (error);
        })
    };
}