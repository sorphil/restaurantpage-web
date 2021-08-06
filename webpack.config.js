const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry:{
    main:'./src/main.js',
    home: './src/components/home.js',
    about: './src/components/about.js',
    menu: './src/components/menu.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[
          { 
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {minimize: true}
          },
        ]
      },
      {
        test: /\.(png|svg|gif|jpg|webp)$/,
        use:[
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {   test: /\.scss$/,   use: ["style-loader", "css-loader", "sass-loader"] }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template:path.resolve(__dirname, 'src') + "/index.html",
      filename: "./index.html"
    }),
    new MiniCSSExtractPlugin({
      //options similar to the options in webpackoptions.output
      //both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  output: {
    filename: 'widget.[contenthash].js',
    // path: path.resolve(bundleOutputDir),
  },
  externals: {
    aos: 'aos',
  },
  
};


