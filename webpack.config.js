const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // connect plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // publicPath: '',
  },
  // target: ['web', 'es5'], // ensure the Webpack glue code is ES5 compatible too
  // stats: { children: true },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   {
        //     loader: 'css-loader',
        //   },
        //   'style-loader',
        // ],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        // add the rule for processing files
        test: /\.(png|jpg)$/,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body' }),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
    new CleanWebpackPlugin(),
  ],
};



// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin"); // connect plugin
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 


// module.exports = {
//   devtool: 'inline-source-map',
//   entry: {
//     main: './src/index.js'
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.js',
//     publicPath: ''
//   },
//   target: ['web', 'es5'], // ensure the Webpack glue code is ES5 compatible too
//   stats: { children: true },
//   mode: 'development',
//   devServer: {
//     static: path.resolve(__dirname, './dist'),
//     compress: true,
//     port: 8080,
//     open: true
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         loader: "babel-loader",
//         exclude: "/node_modules/"
//       },
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: "css-loader"
//           },
//         ],
//       },
//       {
//         // add the rule for processing files
//         test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
//         type: "asset/resource"
//       },
//     ]
//   },
// plugins: [
//     new HtmlWebpackPlugin({template: "./src/index.html"}),
//     new CleanWebpackPlugin(),
//     new MiniCssExtractPlugin()
//   ],
// }