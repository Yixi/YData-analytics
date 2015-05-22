/**
 * Created by Yixi on 5/20/15.
 */

var express = require('express'),
    JSX = require('node-jsx').install({harmony: true}),
    React = require('react'),
    Home = React.createFactory(require('./../components/Home.jsx')),
    router = express.Router();


router.get('/',function(req,res,next){

    var markup = React.renderToString(Home({}));


    res.render('home',{title:"Data analytics",markup:markup});


});

module.exports = router;