var path=require("path");
module.exports = {
    entry: [
        "babel-polyfill",
        "./src/es2015.js"
    ],
    output: {
        path: __dirname + '/dist/',
        publicPath: "/dist/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};