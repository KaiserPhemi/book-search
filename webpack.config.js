// third-party libraries
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// plugins
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      }
    ]
  },
  plugins: [htmlPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
