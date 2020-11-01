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
              name: '下载链接获取工具',
              namespace: 'alanlang',
              description: '方便获取视频网站下载链接',
              match: ['https://www.btmao.cc/*', 'http://www.tldm.net/*', 'https://www.xl720.com/thunder/*', 'http://www.btbuluo.com/*', 'https://www.domp4.com/html/*']
            }
          })
    ],
});
