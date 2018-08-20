import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';
import ManageCarPage from './components/home/manageCarPage';
/**
 *  Application Routings configuration. All pages/container componenets are imported. App is the root of all componenets
 *  @author Deepak Rout  <deepakrout@hotmail.com>
 *   
 */
export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="cars" component={HomePage} />
        <Route path="car" component={ManageCarPage} />
        <Route path="view-car/:id" component={ManageCarPage} />
        <Route path="edit-car/:id" component={ManageCarPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);