const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },{
            test: /.ts$/,
            use: ["ts-loader"]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ],
    // 轮询文件最后编辑时间，如果编辑时间和上次缓存的时间不同则发生变化。在一定时间过后，重新打包编译到磁盘中。缺点：需要刷新浏览器。
    // watch: true,
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        port: 9000
    }
}