"use strict";

var WebpackConfig = require("webpack-config").Config,
    path = require("path"),
    UglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = new WebpackConfig()

    .extend({
        "webpack.base.config.js": function (config) {

            // just a check to ensure nobody has changed our config
            if (String(config.module.rules[1].test) !== String(/\.ts$/)) {
                throw new Error("please leave ts loader at first position or change webpack.prod.config!")
            }
            // add ng-annotate to typescript loader
            config.module.rules[1].loader.unshift("ng-annotate-loader");

            config.module.rules.push(
                {
                    test: /\.js$/,
                    loader: "ng-annotate-loader"
                }
            );

            // break build on lint error
            config.plugins[0].options.options.tslint.failOnHint = true;

            // The sourceMap option of the UglifyJsPlugin now defaults to false (v2) instead of true (v1).
            // This means that if you are using source maps for minimized code, you need to set sourceMap: true
            // for UglifyJsPlugin.


            // TODO does not work at the moment. enable after bug is fixed
            // TypeError: Cannot read property 'sections' of null
            //config.plugins.push(new UglifyJsPlugin({
                // cacheFolder: path.resolve(__dirname, 'build/cached_uglify/'),
                // sourceMap: true
            // }));

            return config;
        }
    });
