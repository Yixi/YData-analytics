/**
 * Created by Yixi on 6/9/15.
 */

'use strict';

import React from 'react';
import {socketOff,socketOn} from '../clientModule/ioManage.js';


class Console extends React.Component{

    componentDidMount(){
        socketOn('newEvent',(data)=>{
            console.log(data);
        })
    }

    componentWillUnmount(){
        socketOff('newEvent');
    }

    render(){
        return (
            <div className="row">

                    Console
            </div>
        )
    }
}

export default Console;
