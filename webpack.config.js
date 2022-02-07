var path = require('path');

var htmlWebpackPlugin = require("html-webpack-plugin");

// import path from "path";

// import { fileURLToPath } from "url";
// import { dirname } from "path";

// import htmlWebpackPlugin from "html-webpack-plugin";


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


module.exports = {
    entry: path.resolve(__dirname, 'src', 'script.js'), 
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'), 
        filename: 'bundle.js', 
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            inject: true,
            }),
    ],
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            },
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },
        ],
    },
};

// export default config;