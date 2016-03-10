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
          files: ['public/styles/*.scss'],
          tasks: ['sass'],
        },
      },

      // Compile Sass to css
      sass: {
        dist: {
          files: {
            'public/styles/main.css': 'public/styles/main.scss'
          }
        }
      },

      // JS linter
      jshint: {
        all: ['pubic/scripts/*.js', 'Gruntfile.js']
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
  grunt.registerTask('serve', ['watch', 'sass', 'jshint']);
};
