const webpack = require('webpack');
const merge = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const common = require('./webpack.common.js');
const WebpackUserscript = require('webpack-userscript');
module.exports = merge.smart(common, {
    mode: 'production',

    devtool: 'hidden-source-map',

    plugins: [
        new ForkTsCheckerWebpackPlugin({
        }),
        new WebpackUserscript({
            headers: {
              name: 'bi猫下载链接获取工具',
              description: '方便获取bt猫下载链接',
              match: 'https://www.btmao.cc/*'
            }
          })
    ],
});
