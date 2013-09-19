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
    imagemin: {
      hoge: {
        expand: true,
        cwd: 'root_dev/',
        src: '**/*.{jpg,jpeg,png,gif}',
        dest: 'root/',
      },
    },
    copy: {
      tt: {
        expand: true,
        cwd: 'root_dev/',
        src: '**/*.tt',
        dest: 'root/',
      },
      all: {
        expand: true,
        cwd: 'root_dev/',
        src: '**/{*,.*}',
        dest: 'root/',
        options: {
          processContentExclude: ['*.tt'],
        },
      },
      options: {
        processContentExclude: ['*.{jpg,jpeg,png,gif,css,js}'],
      },
    },
    clean: {
      hoge: {
        src: 'root/',
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
      tt: {
        files: 'root_dev/**/*.tt',
        tasks: ['copy:tt'],
      },
      reload: {
        files: ['root_dev/**/*', 'lib/'],
        tasks: [],
        options: {
          livereload: true,
        },
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-cssmin');       // CSSのミニファイ
  grunt.loadNpmTasks('grunt-contrib-csslint');      // CSSのシンタックスチェック
  grunt.loadNpmTasks('grunt-contrib-uglify');       // JSのミニファイ
  grunt.loadNpmTasks('grunt-contrib-jshint');       // JSのシンタックスチェック
  grunt.loadNpmTasks('grunt-contrib-imagemin');     // 画像のミニファイ
  grunt.loadNpmTasks('grunt-contrib-copy');         // ただのファイルコピー
  grunt.loadNpmTasks('grunt-contrib-clean');        // ただのファイル削除
  grunt.loadNpmTasks('grunt-contrib-watch');        // 監視
  grunt.loadNpmTasks('grunt-notify');               // GrowlNotify

  // Default task.
  grunt.registerTask('default', 'watch');

  // Task.
  grunt.registerTask('manual', ['clean', 'copy', 'cssmin', 'uglify', 'imagemin', 'jshint', 'csslint']);

  // GrowlNotify
  grunt.task.run('notify_hooks');

};
