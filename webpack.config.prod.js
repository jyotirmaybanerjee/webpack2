const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true
    }
  },
  {
    loader: 'postcss-loader'
  },
  {
    loader: 'sass-loader'
  }
];

module.exports = {
  entry: {
  	app: './src/index.js',
  	vendor: [
  	  'axios',
      'lodash',
      'react',
      'react-dom',
      'react-google-maps',
      'react-redux',
      'react-router',
      'react-sparklines',
      'redux',
      'redux-promise'
  	]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules/')
        ],
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "eslint-loader"
          }
        ],
        options: {
          presets: [
            'react',
            ["es2015", { "modules": false }],
            'stage-1'
          ]
        }
      },
      {
        test: "\.html$",
        loader: "html-loader"
      },
      {
        test: /\.(css|sass)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: styleLoaders
        })
      }
    ]
  },
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: './dist',
    publicPath: ""
  },
  plugins: [
    new ExtractTextPlugin("style/style.css"),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
  }
}