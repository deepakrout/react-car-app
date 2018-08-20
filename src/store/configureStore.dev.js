import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
/**
 * 
 * Store configuration for development enviroment. Here middleware reduxImmutableStateInvariant being 
 * used to avoid mutating application state during development phase. In addition to that the rootReducer, intialState also 
 * being passed to createStore as well thunk middleware is initaited.
 * @author Deepak Rout <deepakrout@hotmail.com>
 * @version 1.0
 * 
 */

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}
