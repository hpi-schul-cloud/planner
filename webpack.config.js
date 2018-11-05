const { CheckerPlugin } = require('awesome-typescript-loader');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const libraryName = 'planner-core-lib';
const outputFile = libraryName + '.umd.js';

module.exports = {
  entry: __dirname + '/src/index.ts',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      }
    ]
  },
  plugins: [new CheckerPlugin(), new BundleAnalyzerPlugin()],
  // Use external version of React
  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom'
  }
};
