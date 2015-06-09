/**
 * Created by Yixi on 6/9/15.
 */

'use strict';

var socket;

function socketOn(name,callback){
    if(!socket) _socketStart();
    socket.on(name,callback);
}

function socketOff(name){
    socket.off(name);
}

function _socketStart(){
    socket = io();
}


export {socketOff,socketOn}