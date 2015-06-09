/**
 * Created by Yixi on 6/4/15.
 * main enter
 */

require('babel/register');

require.extensions['.less'] = function(){return null};

module.exports = require('./server');