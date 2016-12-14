/*global module:false*/

module.exports = function (grunt) {
    var env = process.env.NODE_ENV || "dev";
    var configLocations = ["./grunt/**/*.js"];

    /***************** External configuration management ***********************************/

    var configFiles = grunt.file.expand({
        filter: "isFile"
    }, configLocations );

    grunt.log.debug('Gathering external configuration files'.underline.green);
    grunt.log.debug("configFiles : " + grunt.log.wordlist(configFiles, {
            separator: ', ',
            color: 'cyan'
        }));

    var configArray = configFiles.map(function(file) {
        grunt.log.debug("=> importing : " + file);
        return require(file)(grunt, env);
    });

    var config = {};

    configArray.forEach(function(element) {
        config = grunt.util._.merge(config, element);
        grunt.log.debug()
    });

    grunt.initConfig(config);


    /***************** Task loading & registering *******************************************/

    require('load-grunt-tasks')(grunt, {scope: ['devDependencies']});
    require('time-grunt')(grunt);

    /****** External tasks registering ****************/

    grunt.registerTask("build:prod", [

        // remove files from previuos builds
        "clean",

        // execute webpack to build scripts
        "shell:build-prod",

        // copy necessary files to dist folder
        "copy"

    ]);

};
