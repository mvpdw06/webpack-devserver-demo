const path = require("path");
const webpack = require("webpack");

const env = process.env.NODE_ENV || "development";

// webpack settings
const getPluginsSetting = () => {
    const plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ];
    return plugins;
};

const webpackConfig = {
    context: path.join(__dirname, "../src"),
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "output/assets"),
        filename: "app.js",
        publicPath: "/assets"
    },
    resolve: {
        extensions: [".js"]
    },
    devtool: "cheap-module-eval-source-map",
    plugins: getPluginsSetting(),
    devServer: {
        inline: true
    }
};

module.exports = webpackConfig;
