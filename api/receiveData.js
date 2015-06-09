/**
 * Created by Yixi on 6/9/15.
 */

"use strict";


import express from 'express';
import path from 'path';
import fs from 'fs';

var logger = require('../config/logger')("[API]");

var router = express.Router();
var io;




router.use(function(req,res,next){


    fs.readFile(path.join(__dirname,'r.png'),function(err,data){
        res.end(data, 'binary');
    });


    var userAgent = req.headers['user-agent'];

    logger.debug(req.query);

    io.emit('newEvent',req.query);

});



function route(_io){
    io = _io;
    return router
}


export default route;