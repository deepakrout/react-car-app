import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
/**
 * 
 * Store configuration for production enviroment. Here middleware reduxImmutableStateInvariant removed, 
 * which would cause perfomance issues in prod environment. In addition to that the rootReducer, intialState 
 * also being passed to createStore as well thunk middleware is initaited.
 * @author Deepak Rout <deepakrout@hotmail.com>
 * @version 1.0
 * 
 */

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
