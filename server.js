/**
 * Created by Yixi on 6/4/15.
 */
"use strict";


import express from 'express';
import http from 'http';
import path from 'path';
import log4js from 'log4js';
import RRouter from 'react-router';
import React from 'react';
import SocketIo from 'socket.io';

import config from './config/dev.js';
import routes from './config/routes.js';
import receiveData from './api/receiveData.js';

var logger = require('./config/logger')("[DataAnalytics]");




var server = express();
var _s = http.createServer(server);
var io = SocketIo(_s);

server.set('views',path.join(__dirname,'views'));
server.set('view engine','ejs');

server.use(express.static(__dirname + '/public'));

server.use(log4js.connectLogger(logger,{level:log4js.levels.DEBUG}));



server.get('/r',receiveData(io));

server.use(function(req,res,next){
    var ro = RRouter.create({location:req.url,routes:routes});
    ro.run( (Handler,state) => {
        res.render('default',{markup:React.renderToString(<Handler/>)})
    });
});




_s.listen(config.port,()=>{
    logger.info('Listening on port %s',config.port);

});

io.on('connection',(socket)=>{
    socket.on('mes',()=>{
        logger.debug('message');
    })
});


export default server;

