/**
 * Created by Yixi on 6/4/15.
 */

'use strict';

require('./App.less');

import React from 'react';
import Header from './Header.js';
import {RouteHandler} from 'react-router';



class App extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <RouteHandler/>
            </div>
        )
    }
}


export default App;