module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // TODO: fix
        // watch: {
        //     react: {
        //         files: 'components/*.jsx',
        //         tasks: ['browserify']
        //     }
        // },

        browserify: {
          build: {
                  options: {
                    debug: false,
                    transform: ['reactify']
                  },
                  files: {
                    'scripts/app.min.js': 'components/App.jsx'
                  }
                }
        }

        // TODO: use compiler.js
        // mocha: {
        //   test: {
        //     options: {
        //         require: 'tests/utils/compiler.js'
        //     },
        //     src: ['tests/*.test.js'],
        //   },
        // }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', [
        'browserify'
    ]);
};