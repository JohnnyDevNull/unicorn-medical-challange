module.exports = function (grunt, env) {
    return {
        clean: {
            // files to be deleted
            dist: ["dist/*"],
            temp: [".tmp/*"],
            build: ["build/*"],
            appjs: ["app/**/*.js", "app/**/*.js.map", "!app/shared/**/*.js"]
        }
    };
};
