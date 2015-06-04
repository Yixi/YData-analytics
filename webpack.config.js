/**
 * Created by Yixi on 6/4/15.
 */

var path = require('path');

module.exports = {
    entry:"./client.js",

    output:{
        filename:"[name].js",
        sourceMapFilename:"[file].map",
        chunkFilename: '[id].chunk.js',
        path: path.join('public', 'js'),
        publicPath: '/js/'
    },

    externals: {
        'react': 'window.React'
    },

    module:{
        loaders:[
            { test: /\.js$/, loader: 'babel' },
            { test: require.resolve('react'), loader: 'expose?React' }
        ]
    }
};