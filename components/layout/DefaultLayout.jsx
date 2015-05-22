var React = require('react'),
    HeaderBar = require('./HeaderBar.jsx');


class DefaultLayout extends React.Component{
    render(){
        return (
            <body>
                <HeaderBar></HeaderBar>
                {this.props.children}
            </body>
        )
    }
}

module.exports = DefaultLayout;