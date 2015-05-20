/**
 * Created by Yixi on 5/20/15.
 */

var React = require('react'),
    mui = require('material-ui');

var Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup;


class HeaderBar extends React.Component{
    render(){
        return (
            <Toolbar>
                <ToolbarGroup key={0} float="left">
                </ToolbarGroup>

                <ToolbarGroup key={1} float="right">
                </ToolbarGroup>
            </Toolbar>
        )
    }
}

//var HeaderBar = React.createClass({
//    render:function(){
//        return <div>Header</div>
//    }
//});



module.exports = HeaderBar;
