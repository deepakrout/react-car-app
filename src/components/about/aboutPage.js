import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h5>About</h5>
        <br/>
        <p>Developed By: Deepak K Rout</p>
        <p>Date: 08/16/2018</p>
        <p>This application uses React, Redux, React Router with ES6 and a variety of other helpful libraries as well as build tool webpack. 
           It facilitates the management of cars in the ABC Rental Car company. </p>   
        <p>Run "npm install" to install the dependencies. In order to create a production build just run "npm run build" and dist folder will be ready to be shipped.</p>
        <h6>Production dependecies</h6>
        <pre>
             babel-polyfill	: Polyfill for Babel features that cannot be transpiled <br/>
             bootstrap      : CSS Framework <br/>
             jquery	        : Only used to support toastr<br/>
             react	        : React library<br/>
             react-dom	    : React library for DOM rendering<br/>
             react-redux	: Redux library for connecting React components to Redux<br/>
             react-router	: React library for routing<br/>
             react-router-redux	: Keep React Router in sync with Redux application state<br/>
             redux	        : Library for unidirectional data flows<br/>
             redux-thunk	: Async redux library<br/>
             toastr	        : Display messages to the user<br/>
             fontawesome    : For icons
        </pre>
        <h6>Development dependecies</h6>
        <pre>
            babel-cli	: Babel Command line interface<br/>
            babel-core	: Babel Core for transpiling the new JavaScript to old<br/>
            babel-loader :	Adds Babel support to Webpack<br/>
            babel-plugin-react-display-name	: Add displayName to React.createClass calls<br/>
            babel-preset-es2015	: Babel preset for ES2015<br/>
            babel-preset-react	: Add JSX support to Babel<br/>
            babel-preset-react-hmre	: Hot reloading preset for Babel<br/>
            babel-register : Register Babel to transpile our Mocha tests<br/>
            cheerio	: Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation<br/>
            colors :	Adds color support to terminal<br/>
            compression	: Add gzip support to Express<br/>
            cross-env :	Cross-environment friendly way to handle environment variables<br/>
            css-loader :	Add CSS support to Webpack<br/>
            enzyme : Simplified JavaScript Testing utilities for React<br/>
            eslint : Lints JavaScript<br/>
            eslint-plugin-import :	Advanced linting of ES6 imports<br/>
            eslint-plugin-react	: Adds additional React-related rules to ESLint<br/>
            eslint-watch	: Add watch functionality to ESLint<br/>
            eventsource-polyfill :	Polyfill to support hot reloading in IE<br/>
            expect : Assertion library for use with Mocha<br/>
            express	: Serves development and production builds<br/>
            extract-text-webpack-plugin	: Extracts CSS into separate file for production build<br/>
            file-loader	: Adds file loading support to Webpack<br/>
            jsdom	: In-memory DOM for testing<br/>
            mocha	: JavaScript testing library<br/>
            nock	: Mock HTTP requests for testing<br/>
            npm-run-all	: Display results of multiple commands on single command line<br/>
            open	: Open app in default browser<br/>
            react-addons-test-utils	: Adds React TestUtils<br/>
            redux-immutable-state-invariant	: Warn when Redux state is mutated<br/>
            redux-mock-store :	Mock Redux store for testing<br/>
            rimraf :	Delete files<br/>
            style-loader :	Add Style support to Webpack<br/>
            url-loader :	Add url loading support to Webpack<br/>
            webpack	: Bundler with plugin system and integrated development server<br/>
            webpack-dev-middleware :	Adds middleware support to webpack<br/>
            webpack-hot-middleware	: Adds hot reloading to webpack
        </pre>
      </div>
    );
  }
}

export default AboutPage;
