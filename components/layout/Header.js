/**
 * Created by Yixi on 6/9/15.
 */

'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component{
    render(){

        return (
            <nav>
                <div className="row">
                    <div className="nav-wrapper col s12">
                        <Link to="home" className="brand-logo">YData</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="console">Console</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
}