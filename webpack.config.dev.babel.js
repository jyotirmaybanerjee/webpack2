import path from 'path';

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
]

module.exports = {
  devtool: "source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './',
    publicPath: ""
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
        test: /\.(css|sass)$/,
        loader: styleLoaders
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
  }
}