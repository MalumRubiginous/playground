'use strict';
var path = require('path');

var config = {
    entry: [path.resolve(__dirname, 'app/entry.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loaders: ['babel']
			},{
				test: /\.css$/, 
				loader: "style!css" 
		  }]
    }
};

module.exports = config;