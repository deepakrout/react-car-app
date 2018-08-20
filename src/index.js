/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCars} from './actions/carActions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faTrashAlt } from '@fortawesome/free-solid-svg-icons';

/**
 *  Application bootstrap. Here importing styles as well in order to make to those part of webpack bundle.
 *  Here store is instaciated as well as fontawesome icon library is also imported. Store is passed to the 
 *  Provider, so that the store is available for connect. 
 * @author Deepak Rout <deepakrout@hotmail.com>
 * @version 1.0
 * 
 */

library.add(faPencilAlt,faTrashAlt);


const store = configureStore();
store.dispatch(loadCars());

render ( 
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app') 
);