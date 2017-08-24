const path = require("path");

module.exports = {
    entry: "./src/base.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "anywherenote.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname,"dist"),
        publicPath: "",
        watchContentBase: true
    },
    devtool: "source-map"
}
