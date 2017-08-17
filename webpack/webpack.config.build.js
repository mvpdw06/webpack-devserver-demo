const path = require("path");
const webpack = require("webpack");

const env = process.env.NODE_ENV || "development";
const isDevEnv = env === "development";

// webpack settings
const getDevtoolSetting = () => {
    return isDevEnv ? "cheap-module-eval-source-map" 
                    : "cheap-module-source-map";
};
const getPluginsSetting = () => {
    const plugins = [
        new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(env)
        })
    ];
    if (!isDevEnv) {
        plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        );
    }
    return plugins;
};

const webpackConfig = {
    context: path.join(__dirname, "../src"),
    entry: "./index.js",
    output: {
        path: path.join(__dirname, '../output/assets'),
        filename: "app.js",
        publicPath: '/assets'
    },
    resolve: {
        extensions: [".js"]
    },
    devtool: getDevtoolSetting(),
    plugins: getPluginsSetting()
};

module.exports = webpackConfig;
