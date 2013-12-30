module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      jst: {
        files: ['assets/templates/**/*.html'],
        tasks: ['jst:dev']
      }
    },

    bower: {
      install: {
        options: {
          targetDir: 'assets/libs',
          layout: 'byComponent',
          install: true,
          verbose: true,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },

    jst: {
      options: {
        processName: function(filename) {
          return filename.replace(/assets\/templates\/(.+)\.html$/)[1];
        },
        amd: true
      },
      dev: {
        files: {
          'assets/templates.js': ['assets/templates/**/*.html']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-jst');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['bower', 'jst']);

};