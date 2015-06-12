/**
 * Created by Yixi on 6/9/15.
 */

'use strict';

import React from 'react';
import {socketOff,socketOn} from '../clientModule/ioManage.js';



var Console  = React.createClass({

    getInitialState(){
      return {
          logs:[]
      };
    },

    componentDidMount(){

        socketOn('newEvent',(data)=>{
            console.log(data);
            var logs = this.state.logs.concat([data]);
            this.setState({logs:logs});
        })
    },

    componentWillUnmount(){
        socketOff('newEvent');
    },

    render(){

        var log = function(item,index){
            return <li>{item.h}</li>;
        };

        return (
            <div className="row">
                <ul>{this.state.logs.map(log)}</ul>
            </div>
        )
    }
});


export default Console;
