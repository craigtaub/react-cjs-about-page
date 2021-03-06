module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            react: {
                files: 'src/components/*.jsx',
                tasks: ['browserify']
            }
        },
        browserify: {
          build: {
              options: {
                debug: false,
                transform: [
                    'reactify', // transform reactJS
                    'babelify' // transform es6 to es5
                ]
              },
              files: {
                'src/public/js/app.js': 'src/components/App.jsx'
              }
            }
        },
        uglify: {
          my_target: {
            files: {
              'src/public/js/app.min.js': ['src/public/js/app.js']
            }
          }
        },
        mochaTest: {
          test: {
            options: {
              quiet: true,
              clearRequireCache: false,
              require: 'tests/utils/compiler.js'
            },
            src: ['tests/*.test.js']
          }
        }

    });

    grunt.loadNpmTasks('grunt-browserify'); // all into 1 file
    grunt.loadNpmTasks('grunt-contrib-uglify'); // minification
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('default', ['browserify', 'uglify']);
    grunt.registerTask('test', ['mochaTest']);
};
