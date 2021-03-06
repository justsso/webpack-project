const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;

//单页 多页  服务端 不同的配置
module.exports = (env, argv) => ({
    entry: {
        app: ['./src/index.js', './public/index.html'],
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {loader: "babel-loader", options: {presets: ["@babel/preset-env", "@babel/preset-react"]}}
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: path.join(__dirname, "public/index.html")})
    ],
    devServer: {
        port: 3100,
        open: true,
        hot: true,
        contentBase: './build'
    },
    devtool: "inline-source-map"
});
