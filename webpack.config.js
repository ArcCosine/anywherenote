const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/base.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "anywherenote.js"
    }
};
