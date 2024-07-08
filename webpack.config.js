const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
    },
    devtool: 'inline-source-map',
    plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
  };