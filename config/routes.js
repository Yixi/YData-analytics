/**
 * Created by Yixi on 6/4/15.
 */

import React from 'react';
import {DefaultRoute,Route,NotFoundRoute,Redirect} from 'react-router';

import App from '../components/layout/App.js';
import Home from '../components/layout/Home.js';
import Console from '../components/Console.js';

var router = (
    <Route handler={App}>
        <DefaultRoute handler={Home} name="home"/>
        <Route path="console" handler={Console} name="console"></Route>
    </Route>
);

export default router;