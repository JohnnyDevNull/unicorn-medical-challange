var webpackConfig = require("../../webpack.test.config.js");

module.exports = function (config) {

    "use strict";

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../../',

        browserNoActivityTimeout: 120000,

        frameworks: ['jasmine'],

        files: [

            "node_modules/jasmine-expect/dist/jasmine-matchers.js",

            { pattern: 'spec.bundle.js', watched: false },

            // make templates available. we put them in the templatecache for directive testing
            'app/**/*.html'
        ],

        reporters: ['progress', "coverage"],

        coverageReporter: {
            dir : 'coverage/',
            reporters: [
                { type: 'text-summary' },
                { type: 'html' }
            ]
        },

        preprocessors: {

            // For directive testing, we dont want to load templates defined by templateUrl by request.
            // Ng-html2js reads the HTML files you specify and converts them into an Angular module that pre-loads the $templateCache
            "app/**/*.html": ["ng-html2js"],

            "spec.bundle.js": ["webpack", "sourcemap"]
        },

        webpack: webpackConfig,

        webpackServer: {
            noInfo: true // prevent console spamming when running in Karma!
        },

        ngHtml2JsPreprocessor: {
            moduleName: 'templates'
        },

        port: 8080,

        colors: true,

        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        browsers: [
            'Chrome'
        ],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        singleRun: true// to make WebStorm's F9 Mode work, need to set this to "false"
        // if false, it will keep reloading the code part, but not register any changes made to a .spec file...
    });
};
