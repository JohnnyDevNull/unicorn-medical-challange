var WebpackConfig = require("webpack-config").Config;

module.exports = new WebpackConfig().extend({
    "webpack.base.config.js": function (config) {

        //TODO does not work at the moment - wait for final release of ExtractTextPlugin
        /*
        // disable all ExtractTextPlugins because they dont support HMR
        for (var i = 0; i < Object.keys(config.plugins).length; i++) {
            if (config.plugins[i].constructor.name === "ExtractTextPlugin") {
                config.plugins[i].options.disable = true;
            }
        }
        */
        return config;
    }
}).merge({

    devServer: {
        hot: true,
        port: 3333,

        // be aware of angulars html5mode and redirect all get to index.html
        historyApiFallback: true,

        proxy: {
            "/service/*": {
                target: "localdev.redmedical.de:29442",
                // do not evaluate ssl certificate or we get an error
                secure: false
            }
        }
    }

});
