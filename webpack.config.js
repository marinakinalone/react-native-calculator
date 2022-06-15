const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path")

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    static : {
        directory : path.join(__dirname, "dist/")
    },
    port: 3000
  },
    resolve: {
        alias: {
        "react-native": "react-native-web"
        },
        extensions: [".web.js", ".js"]
    },

};