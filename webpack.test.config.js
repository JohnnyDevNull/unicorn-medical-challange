var path = require("path");

module.exports = {

    resolve: {
        modules: [
            path.resolve(__dirname, "node_modules")
        ],
        descriptionFiles: ["package.json"],
        extensions: [".ts", ".js"]
    },

    devtool: 'inline-source-map',

    module: {

        loaders: [

            {
                test: /\.ts$/,
                loader: ["awesome-typescript-loader"]
            },

            {
                test: /\.html$/,
                loader: ["html-loader"]
            },

            {
                test: /\.scss$/,
                loader: ["raw-loader", "sass-loader"]

            },
            {
                test: /\.css$/,
                loader: "raw-loader"
            },

            // instrument only testing sources with Istanbul
            {
                test: /\.(js|ts)$/,
                enforce: "post",
                loader: 'istanbul-instrumenter-loader',
                exclude: [
                    /node_modules/
                ]
            }
        ]
    }
};
