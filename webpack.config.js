let webpack = require('webpack');
let path = require('path');
let packageJSON = require('./package.json');
let UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
let env = process.env.WEBPACK_ENV;

let libraryName = packageJSON.name;
let config;

if (true/*env === 'production'*/) {
  config = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: libraryName + "-" + packageJSON.version + '.js',
      globalObject: 'this',
      library: {
        name: 'LNR',
        type: 'umd',
        export: 'default' //<--- important
      },
    },
    externals: {
      ethers: {
        commonjs: 'ethers',
        commonjs2: 'ethers',
        amd: 'ethers',
        root: 'ethers',
      },
    },
    optimization: {
        minimize: true
    },
  };

}
module.exports = config;
