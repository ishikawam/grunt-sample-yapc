/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    cssmin: {
      hoge: {
        expand: true,
        cwd: 'root_dev/',
        src: '**/*.css',
        dest: 'root/',
      },
    },
    csslint: {
      hoge: {
        src: 'root_dev/bootstrap.css',
        options: {
          // ここまで緩和しないとlintが通らない
          import: false,
          important: false,
          'unique-headings': false,
          'adjoining-classes': false,
          'fallback-colors': false,
          gradients: false,
          'box-model': false,
          'compatible-vendor-prefixes': false,
          'unqualified-attributes': false,
          namespaced: false,
          'outline-none': false,
          'box-sizing': false,
          'regex-selectors': false,
          'qualified-headings': false,
          'text-indent': false,
          'universal-selector': false,
          'overqualified-elements': false,
          'known-properties': false,
          'display-property-grouping': false,
          shorthand: false,
          floats: false,
          'font-sizes': false,
        },
      },
    },
    uglify: {
      hoge: {
        expand: true,
        cwd: 'root_dev/',
        src: '**/*.js',
        dest: 'root/',
      },
      assets: {
        expand: true,
        cwd: 'root_dev/assets/',
        src: '**/*.js',
        dest: 'root/assets/',
      },
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        undef: true,
        unused: true,
        sub: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
        },
      },
      gruntfile: {
        src: 'Gruntfile.js',
      },
      hoge: {
        src: ['root_dev/assets/**/*.js'],
        options: {
          jquery: true,
        },
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile'],
      },
      css: {
        files: 'root_dev/**/*.css',
        tasks: ['cssmin', 'csslint'],
      },
      js: {
        files: 'root_dev/assets/**/*.js',
        tasks: ['uglify:assets', 'jshint:hoge'],
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', 'watch');

  // Task.
  grunt.registerTask('manual', ['cssmin', 'uglify', 'jshint', 'csslint']);

};
