'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [
                'Gruntfile.js',
                'src/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: [
            'favicon.ico',
            'index.html',
            'PrintTheLove*.css',
            'PrintTheLove*.js',
            'img'
        ],
        copy: {
            favicon: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'src/favicon.ico',
                    dest: '.'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'bower_components/components-font-awesome/fonts/*',
                    dest: 'build/fonts/'
                }]
            },
            images: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'src/img/*',
                    dest: 'img/'
                }]
            }
        },
        filerev: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            images: { src: 'img/*' },
            js:     { src: '*.js' },
            css:    { src: '*.css' }
        },
        jade: {
            index: {
                files: {
                    'index.html': 'src/index.jade'
                }
            }
        },
        sass: {
            compile: {
                options: {
                    style: 'expanded'
                },
                src: 'src/css/PrintTheLove.scss',
                dest: 'PrintTheLove.css'
            }
        },
        usemin: {
            html: ['index.html']
        },
        useminPrepare: {
            src: ['index.html']
        },
        watch: {
            files: [
                'Gruntfile.js',
                'src/**/*'
            ],
            tasks: ['default'],
            options: {
                livereload: true
            }
        }
    });

    grunt.registerTask('default', [
        'jshint',
        'copy',
        'jade',
        'sass'
    ]);

    grunt.registerTask('release', [
        'clean',
        'default',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev',
        'usemin'
    ]);

};
