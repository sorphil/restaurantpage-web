const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode:'development',
    entry: {
        './main':'./src/main.js',
        './components/about':'./src/components/about.js',
        './components/home':'./src/components/home.js',
        './components/menu':'./src/components/menu.js',
        './styles/styles':'./src/styles/styles.scss',
    },
    plugins: [
        new MiniCSSExtractPlugin(),
        new HTMLWebPackPlugin({
            template:path.resolve(__dirname, 'src') + "/index.html",
            filename: "./index.html"
          }),
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader", 
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader:"file-loader",
                options: {
                    name: './assets/images/[name].[ext]',
                  },
            },
        ]
    },
    externals: {
      aos: 'aos',
    },
}
 


