/**
 * Created by Yixi on 6/4/15.
 */


import express from 'express';
import path from 'path';
import log4js from 'log4js';
import RRouter from 'react-router';
import React from 'react';

import config from './config/dev.js';
import routes from './config/routes.js';

var logger = require('./config/logger')("dataAnalytics");





const server = express();

server.set('views',path.join(__dirname,'views'));
server.set('view engine','ejs');

server.use(express.static(__dirname + '/public'));

server.use(log4js.connectLogger(logger,{level:log4js.levels.DEBUG}));


server.use(function(req,res,next){
    var ro = RRouter.create({location:req.url,routes:routes});

    ro.run( (Handler,state) => {
        res.render('default',{markup:React.renderToString(<Handler/>)})
    });
});



server.listen(config.port,function(){
    logger.info('Listening on port %s',config.port);
});

export default server;

