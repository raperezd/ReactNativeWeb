const stylesheetUrl = require("extract-text-webpack-plugin");

// Create multiple instances of stlyes depending if the extension is .css or .scsss
const extractCSS = new stylesheetUrl('[name]-one.css');
const extractSASS = new stylesheetUrl('[name]-two.css');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    //context: path.resolve(__dirname, "./web/src"),
    devServer: {
        inline: true,
        contentBase: './web/dist',
        port: 3000,
        hot:true
    },
    entry: './web/src/index.web.js',
    output: {
        filename: './web/dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: stylesheetUrl.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: stylesheetUrl.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
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
        new stylesheetUrl("app.css")
        //,new HtmlWebpackPlugin()
    ]
};