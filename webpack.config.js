var path = require('path');
var webpack = require('webpack');

module.exports = {
    // 配置入口文件
    entry: {
        app: ['./src/app.js']
    },
    // 配置输出路径
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',//指定资源引用目录
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, //打包时过滤掉这个文件
                use: ['babel-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        progress: true
    }
}
