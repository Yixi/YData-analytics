/**
 * Created by Yixi on 5/19/15.
 */


var express = require('express'),
    exphbs = require('express-handlebars'),
    config = require('./config/dev'),
    routes = require('./routes');



var app = express();
var port = process.env.PORT || 8080;



app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(express.static(__dirname + '/public'));

routes(app);



var server = app.listen(config.port,function(){
    console.log('Listening on port %d', server.address().port);
});

