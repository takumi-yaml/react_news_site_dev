var path = require("path");

const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|htdocs)/,
    loaders: ['react-hot']
  },
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|htdocs)/,
    loader: 'babel',
    query: {
      presets: ['es2015', 'react'],
      plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
    }
  },
  {
    test: /[\/\\]src[\/\\].*\.scss/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'sass'
    ]
  }
];

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "htdocs/src"),
    publicPath: "/src/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders
  }
};
