var webpack = require('webpack'),
    WebpackConfig = require('webpack-config').Config,
    path = require("path"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),

    appCssExtractor = new ExtractTextPlugin({filename: 'app.bundle.css'}),          // extractor plugin instance for all our own css/scss
    vendorCssExtractor = new ExtractTextPlugin({filename: 'vendor.bundle.css'});    // extractor plugin instance for bundling all vendor

module.exports = new WebpackConfig().merge({

    entry: {
        app: [
            './app/bootstrap.ts'
        ]
    },

    output: {
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        path: path.resolve(__dirname, "build"),

        // the filename template for entry chunks
        filename: "[name].bundle.js",

        // the url to the output directory resolved relative to the HTML page
        publicPath: "/build/"
    },

    resolve: {

        modules: [
            path.resolve(__dirname, "node_modules")
        ],
        descriptionFiles: ["package.json"],
        extensions: [".ts", ".js"]
    },

    plugins: [

        // configuration for legacy plugins which are not yet fully webpack2 compatible
        new webpack.LoaderOptionsPlugin({
            options: {
                tslint: {
                    // tslint errors are displayed by default as warnings
                    // set emitErrors to true to display them as errors
                    emitErrors: false,

                    // tslint does not interrupt the compilation by default
                    // if you want any file with tslint errors to fail
                    // set failOnHint to true
                    failOnHint: false
                },

                // Html loader advanced options
                // See: https://github.com/webpack/html-loader#advanced-options
                // TODO: Need to workaround Angular 2's html syntax => #id [bind] (event) *ngFor
                htmlLoader: {
                    removeAttributeQuotes: false,
                    caseSensitive: true,
                    customAttrSurround: [
                        [/#/, /(?:)/],
                        [/\*/, /(?:)/],
                        [/\[?\(?/, /(?:)/]
                    ],
                    customAttrAssign: [/\)?\]?=/]
                }
            }

        }),

        // register all above defined extractor plugins
        appCssExtractor,
        vendorCssExtractor
    ],

// Source maps support (or 'inline-source-map' also works)
    devtool: 'source-map',

    module: {

        rules: [

            // PRELOADERS
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: "tslint-loader"
            },

            // LOADERS
            {
                test: /\.ts$/,
                loader: ["awesome-typescript-loader"]
            },

            {
                test: /\.html$/,
                loader: ["html-loader"]
            },

            // two different css rules, so use array syntax

            // generate css by compiling sass
            // additionally write css into separate file with ExtractTextPlugin
            {
                test: /\.scss$/,
                exclude: path.resolve(__dirname, "assets/sass/themes"),
                loader: appCssExtractor.extract({
                    fallbackLoader: "style-loader",
                    loader: ["css-loader", "sass-loader"]
                })
            },

            // load vendor css, no sass-compiling necessary
            {
                test: /\.css$/,
                loader: vendorCssExtractor.extract({
                        fallbackLoader: {
                            loader: "style-loader",
                            options: {
                                insertAt: "top",
                                singleton: true
                            }
                        },
                        loader: "css-loader"
                    }
                )
            },

            // load images inside stylesheets via url loader, transform them into base64 strings and inline them into the stylesheets
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 25000
                    }
                }]
            },

            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 1000,
                        mimetype: "application/font-woff",
                        name: "fonts/[name].[hash:8].[ext]"
                    }
                }]
            },

            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[hash:8].[ext]"
                }
            }

        ]

    }
});
