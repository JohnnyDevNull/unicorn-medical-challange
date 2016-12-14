module.exports = function (grunt, env) {
    return {
        copy: {
            dist: {
                files: [
                    {expand: true, src: "**", cwd: "build",                                         dest: "dist/client/build"},
                    {src: "index.html",                                                             dest: "dist/client/index.html"}
                ]
            }
        }
    };
};
