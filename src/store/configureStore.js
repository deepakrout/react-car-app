/**
 *  This configuration file checks the node environment variable and based on that it beings the store configuration.
 *  For  dynamic import commonJs is being used. ES6 no supprt yet.
 *  @author Deepak Rout <deepakrout@hotmail.com>
 *  @version 1.0
 */

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
  } else {
    module.exports = require('./configureStore.dev');
  }
  