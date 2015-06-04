/**
 * Created by Yixi on 5/22/15.
 */


import React from 'react';
import Router from 'react-router';
import routes from './config/routes.js';

Router.run(routes,Router.HistoryLocation,(Handler,state)=>{
    React.render(<Handler/>,document.getElementById('MainRenderMarkup'));
});
