/**
 * Created by Yixi on 6/5/15.
 */

var http = require('http'),
    path = require("path"),
    fs = require("fs"),
    url = require('url');



function onReq(req,res){

    var pathname = __dirname + url.parse(req.url).pathname;
    if(path.extname(pathname) == ""){
        pathname+='/';
    }
    if(pathname.charAt(pathname.length-1) == '/'){
        pathname +='index.html';
    }

    fs.exists(pathname,function(exists){
       if(exists){
           switch(path.extname(pathname)){
               case '.html':
                   res.writeHead(200,{"Content-Type":"text/html"});
                   break;
               case 'js':
                   res.writeHead(200, {"Content-Type": "text/javascript"});
                   break;

           }

           fs.readFile(pathname,function(err,data){
               res.end(data);
           })
       }
    });
}


http.createServer(onReq).listen(8081);