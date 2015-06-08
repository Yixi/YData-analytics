/**
 * Created by Yixi on 6/4/15.
 */

import React from 'react';
import {DefaultRoute,Route,NotFoundRoute,Redirect} from 'react-router';

import App from '../components/layout/App.js';


var router = (
    <Route handler={App}>
        <Route path="h"></Route>
    </Route>
);

export default router;