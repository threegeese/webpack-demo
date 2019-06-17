"use strick";

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: "./src/index.js",
        search: "./src/search.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    mode: "development",
    module: {
        rules: [
            { test: /.js$/, use: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"]},
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10240
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10240
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: './dist'
    }
};