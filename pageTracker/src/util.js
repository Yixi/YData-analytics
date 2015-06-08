/**
 * Created by Yixi on 6/8/15.
 */

import config from './config.js';

function trim(str){
    return str.replace(/^\s+/,"").replace(/\s+$/,"");
}

function processQuery(json) {
    var newJson = {};

    var hash = {
        referrer: 'r',
        domain: 'd',
        path: "p",
        search: "s",
        hash: "h"
    };


    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            if (hash[key] !== undefined) {
                newJson[hash[key]] = json[key];
            } else {
                newJson[key] = json[key];
            }
        }
    }
    return newJson;
}

function convertToQuery(json){
    var query = "";
    json = processQuery(json);
    console.log(json);
    for(var key in json){
        if(json.hasOwnProperty(key)){
            if (json[key] !== undefined && trim(json[key]) !== "") {
                query += key + '=' + encodeURIComponent(json[key]) + '&';
            }
        }
    }
    return query.slice(0,-1);
}

function on(handler,event,hook){
    handler.addEventListener(event,hook,false);
}

function sendToServer(query){
    var req = new Image();
    var url = config.serverURL +'?' + query;
    req.src = url;
}

export {sendToServer,on,convertToQuery};

