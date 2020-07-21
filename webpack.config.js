module.exports = {
  entry: {
    main: './lesson1/main.js'
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: '8888',

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [[
              '@babel/plugin-transform-react-jsx',
              {pragma: 'ToyReact.createElement'}
            ]]
          }
        }
      }
    ]
  },
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  }
}