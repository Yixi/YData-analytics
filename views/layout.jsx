/**
 * Created by Yixi on 5/19/15.
 */

var React = require('react'),
    HeaderBar = require('./components/HeaderBar'),
    mui = require('material-ui');

var Toolbar = mui.Toolbar;

class DefaultLayout extends React.Component{
    render(){
        return (
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="style/main.css" />
                </head>
                <body>
                <HeaderBar></HeaderBar>
                {this.props.children}
                </body>
            </html>
        )
    }
}


module.exports = DefaultLayout;