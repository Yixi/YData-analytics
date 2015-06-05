/**
 * Created by Yixi on 6/4/15.
 */

(function($,doc){

    'use strict';



    /*===== helps ====*/

    function trim(str){
        return str.replace(/^\s+/,"").replace(/\s+$/,"");
    }


    /*===== Private ======*/

    var SERVERAPIURL = 'http://localhost:8080/h';




    function convertToQuery(json){
        var query = "";
        for(var key in json){
            if(json[key]!==undefined && trim(json[key])!==""){
                query+= key + "=" + json[key] + '&';
            }
        }
        return query;
    }

    function sendToServer(query){
        var req = new Image();
    }


    function bindEvent(){
        document.body.addEventListener('click',eventHook,false);

        $.addEventListener("hashchange",viewEventHook,false);

    }




    function eventHook(event){

        console.log(event);
    }


    function viewEventHook(){
        var reffer = doc.referrer;
        var domian = $.location.host;
        var path = $.location.pathname;
        var search = $.location.search;
        var hash = $.location.hash;

        console.log('change');

        var query = convertToQuery({
            r:reffer,
            d:domian,
            p:path,
            s:search,
            h:hash
        });

        console.log(query);

    }


    function start(){
        console.info('script running...');


        bindEvent();


        /*trigger*/
        viewEventHook();
    }

    /*===== Public api ======*/


    function dasfdsafd(){
        this.a = "123";
    }



    dasfdsafd.prototype.dafdasf = function(){
        this.addasfd = "12123";
    };

    dasfdsafd.prototype.adfadfadf = function(){
        this.dafdasf();
        this.dasfadsfadsf ="123123";
    };

    var test = new dasfdsafd();
    test.adfadfadf();







    start();

})(window,document);
