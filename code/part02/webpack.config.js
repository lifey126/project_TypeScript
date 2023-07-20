//引入一个包
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//webpack 配置信息
module.exports = {
    //入口文件
    entry: './src/index.ts',
    //打包文件
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: "bundle.js",

        //不使用箭头
        environment:{
            arrowFunction:false
        }
    },

    //使用模块
    module:{
        //加载的规则
        rules:[
            {
                //规则生效的文件
                test:/\.ts$/,
                use:[
                    //配置babel
                    {
                        loader: "babel-loader",
                        options:{
                            //预定义环境
                            presets:[
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //兼容的目标浏览器
                                        // targets:{
                                        //     "chrome": "88"
                                        // },
                                        corejs: { version: 3, proposals: true },
                                        //按需加载
                                        useBuiltIns:"usage",
                                    }
                                ]
                            ]
                        },
                    },
                    'ts-loader',
                ],
                exclude:/node-modules/
            },
        ]
    },

    //配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:"./src/index.html"
        }),
    ],

    //设置引用模块
    resolve:{
        extensions:['.ts', '.js']
    }

}