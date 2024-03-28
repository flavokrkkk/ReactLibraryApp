import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import {HTMLWebpackPlugin} from 'html-webpack-plugins'

module.exports = {
    mode: "development",
    entry: "./src/main.jsx",
    output: {
        path: resolve(__dirname, 'dist'),
        filename: "[name].[hash].js"
    },
    plugins: [
        new HTMLWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin()
    ]
}