/**
 * Created by Yixi on 5/19/15.
 */

var React = require('react'),
    DefaultLayout = require('./layout');


class IndexPage extends React.Component{
    render(){
        return (
            <DefaultLayout title={this.props.title}>
                <div>{this.props.title}</div>
            </DefaultLayout>
        )
    }
}

module.exports = IndexPage;