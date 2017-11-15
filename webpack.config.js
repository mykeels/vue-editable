var webpack = require('webpack');
var path = require('path');
var ghPages = require('gh-pages')


// Naming and path settings
var appName = 'vue-editable';
var entryPoint = './src/index.js';
var exportPath = path.resolve(__dirname, './build');

// Enviroment flag
var plugins = [];
var env = process.env.WEBPACK_ENV;

// Differ settings based on production flag
if (env === 'production') {
  var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

  plugins.push(new UglifyJsPlugin({ minimize: true }));
  plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }
  ));

  appName = appName + '.min.js';
}
else if (env === 'gh-pages') {
  ghPages.publish('examples', (err) => {
    console.error(err)
  })
}
else {
  appName = appName + '.js';
}

// Main Settings config
module.exports = {
  entry: entryPoint,
  output: {
    path: exportPath,
    filename: appName
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins
};