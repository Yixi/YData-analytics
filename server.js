/**
 * Created by Yixi on 5/19/15.
 */


var express = require('express'),
    config = require('./config/dev');



var app = express();
var port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());






var server = app.listen(config.port,function(){
    console.log('Listening on port %d', server.address().port);
});