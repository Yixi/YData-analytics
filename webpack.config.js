/**
 * Created by Yixi on 6/4/15.
 */

var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:{
        main:"./client.js",
        YTracker:"./pageTracker/src/tracker.js"
    },

    output:{
        filename:"[name].js",
        sourceMapFilename:"[file].map",
        chunkFilename: '[id].chunk.js',
        path: path.join('public', 'dist'),
        publicPath: '/dist/'
    },

    externals: {
        'react': 'window.React',
    },

    module:{
        loaders:[
            { test: /\.js$/, loader: 'babel' },
            { test: require.resolve('react'), loader: 'expose?React' },
            { test: /\.css$/,loader:ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")}
        ]
    },

    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};