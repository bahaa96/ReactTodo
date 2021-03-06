let path = require("path")
let webpack = require("webpack")
let envFile = require("node-env-file")

process.env.NODE_ENV = process.env.NODE_ENV || "development"

try {
    envFile(path.resolve(__dirname, "config/" + process.env.NODE_ENV + ".env"))
}
catch (e){
    console.log(e)
}

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
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
                PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
                STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
                MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
            }
        })
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [
            "node_modules/",
            "app/components/",
            "app/api"
        ],
        alias: {
            app: path.resolve(__dirname, "app"),
            Styles: path.resolve(__dirname, "styles/app.scss"),
            actions : path.join(__dirname, "app/actions/actions.jsx"),
            reducers : path.join(__dirname, "app/reducers/reducers.jsx"),
            configureStore: path.resolve(__dirname, "app/store/configureStore.jsx")
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

    devtool : process.env.NODE_ENV === "development" ? "cheap-module-eval-source-map" : undefined
}