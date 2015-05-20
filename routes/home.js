/**
 * Created by Yixi on 5/20/15.
 */

var express = require('express'),
    JSX = require('node-jsx').install(),
    reactTools = require('react-tools'),
    React = require('react'),
    router = express.Router();


router.get('/',function(req,res,next){
    res.render('index',{title:"Data analytics"});


});

module.exports = router;