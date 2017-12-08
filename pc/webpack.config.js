const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry:{
        bundle:'./main.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                options:{
                    presets:['env']
                } 
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2|gif|jpg)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    devServer:{
        open:true,
        port:8081,
        inline:true,
        historyApiFallback:true,
        noInfo:true,
        hot:true
    },
    resolve:{
        alias:{
            'vue':'vue/dist/vue.js'
        }
    },
    devtool:"eval-source-map",
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}