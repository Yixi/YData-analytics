/**
 * Created by Yixi on 5/20/15.
 */

var home = require('./home');

module.exports = function(app){


    app.use('/',home);


};