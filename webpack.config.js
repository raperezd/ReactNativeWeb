//var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    context: path.resolve(__dirname, "./"),
    devServer: {
        contentBase: path.join(__dirname, "/web/dist"),
        compress: true,
        publicPath: "/assets/",
        hot: true,
        port: 9000
    },
    entry: './index.web.js',
    output: {
        filename: './web/dist/js/bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: 50,
                                speed: 4
                            },
                            mozjpeg: {
                                quality: 50
                            }
                        }
                    }
                ]
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
    ]
};