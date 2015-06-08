/**
 * Created by Yixi on 6/8/15.
 */

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
    console.log(query);
}

export {sendToServer,on,convertToQuery};


//export default {
//    trim:function(str){
//        return str.replace(/^\s+/,"").replace(/\s+$/,"");
//    },
//
//    processQuery:function(json){
//        var newJson = {};
//
//        var hash = {
//            referrer:'r',
//            domain:'d',
//            path:"p",
//            search:"s",
//            hash:"h"
//        };
//
//
//        for (var key in json){
//            if(json.hasOwnProperty(key)){
//                if(hash[key]!==undefined){
//                    newJson[hash[key]] = json[key];
//                }else{
//                    newJson[key] = json[key];
//                }
//            }
//        }
//        return newJson;
//    },
//
//    convertToQuery(json){
//        var query = "";
//        json = this.processQuery(json);
//        console.log(json);
//        for(var key in json){
//            if(json.hasOwnProperty(key)){
//                if (json[key] !== undefined && this.trim(json[key]) !== "") {
//                    query += key + '=' + encodeURIComponent(json[key]) + '&';
//                }
//            }
//        }
//        return query.slice(0,-1);
//    },
//    on:function(handler,event,hook){
//        handler.addEventListener(event,hook,false);
//    },
//    sendToServer:function(query){
//        var req = new Image();
//        console.log(query);
//    }
//}