import {combineReducers} from 'redux';
import cars from './carReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

/**
 * rootReducer combines all reducers. Hence cars and ajaxCallInProgress is being imported here. 
 * @author Deepak Rout <deepakrout@hotmail.com>
 */
 

const rootReducer = combineReducers ({
    cars,
    ajaxCallsInProgress
});

export default rootReducer;

