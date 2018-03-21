
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'index.css'
});

module.exports = {
    entry: path.resolve(__dirname, 'src/js/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['style-loader', 'css-loader', 'sass-loader']
                })
            }
        ]
    },
    resolve: {
        // tell webpack to look for required files in bower and node
        modulesDirectories: [
          'node_modules'
        ],
        extensions: ['', '.js', '.css']
    },
    plugins: [
        extractPlugin
    ]
};