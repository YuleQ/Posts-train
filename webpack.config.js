const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry:{
        bundle: path.resolve(__dirname,'src/index.js')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: '[name][ext]'

    },
    devtool: 'source-map',
    devServer:{
        static:{
            directory: path.resolve('dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    resolve:{
        extensions:['.js','.jsx']
     },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:['babel-loader']
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)&/i,
                type: 'assets/resource',
                use:['file-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}
