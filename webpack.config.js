let path = require("path")
let webpack = require("webpack")

module.exports = {
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!tether/dist/js/tether.min.js",
        "script-loader!bootstrap/dist/js/bootstrap.min.js",
        "./app/app.jsx"
    ],
    externals:{
        jquery: "jQuery",
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': "jquery",
            "JQuery": "jquery",
            "window.jQuery": "jquery",
        })
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [
            "node_modules/",
            "app/components/"
        ],
        alias: {
            Styles: path.resolve(__dirname, "styles/app.scss"),
        },
        extensions: [" ", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', "stage-0"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,

            },

        ]
    },

    devtool : "cheap-module-eval-source-map"
}