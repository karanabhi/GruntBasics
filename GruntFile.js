module.exports = function (grunt) {

    //Configuration
    grunt.initConfig({
        //Pass references to plugins, files etc
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src: ['css/style1.css', 'css/styles.css', 'css/style2.css'],
                dest: 'build/styles.css'
            }
        },
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/scss/main.scss'
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/scripts.min.js': ['build/scripts.js']
                }
            }
        }
    });

    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Register Tasks
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);
    grunt.registerTask('sass-scss', ['sass:dist']);
    grunt.registerTask('uglify-js', ['uglify:dist']);
};