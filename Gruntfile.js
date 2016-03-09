module.exports = function(grunt) {

    // New Gruntfile
    grunt.initConfig({
      // Watch files for changes and run tasks
      watch: {
        scripts: {
          files: ['**/*.js'],
          tasks: ['jshint'],
        },
        sass: {
          files: ['**/*.scss'],
          tasks: ['sass'],
        },
      },
      // Compile Sass to css
      sass: {
        dist: {
          files: [{
            expand: true,
            cwd: '.',
            src: ['*.scss'],
            dest: '/styles',
            ext: '.css'
          }]
        }
      },
      // JS linter
      jshint: {
        all: ['scripts/*.js', 'Gruntfile.js']
      },
      nodemon: {
        dev: {
          script: 'app.js'
        }
      }
    });

  // Loading all tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-nodemon');
};
