const dirs = require('./dirs');

module.exports = {
    entry: {
        show: ['./src/index.ts'],
    },
    output: {
        path: dirs.DEST,
        filename: 'bimao.js',
        libraryTarget: "umd",
        library: 'bimao',
        libraryExport: "default"
    },
    resolve: {
        mainFields: ['module', 'main'],
        extensions: ['.js', '.ts'],
    },

    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                include: [dirs.SRC],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        configFile: dirs.BABEL_CONFIG
                    },
                }, {
                    loader: 'source-map-loader',
                    options: {
                        enforce: 'pre'
                    }
                }]
            }
        ],
    },
};
