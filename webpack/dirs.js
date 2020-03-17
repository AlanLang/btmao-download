const path = require('path');
module.exports = {
    DEST: path.resolve(__dirname, '../dist'),
    NODE_MODULES: path.resolve(__dirname, '../node_modules'),
    SRC: path.resolve(__dirname, '../src'),
    BABEL_CONFIG: path.resolve(__dirname, '../babel.config.js'),
};