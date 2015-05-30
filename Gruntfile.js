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
            'dist'
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
                    dest: 'dist/fonts/'
                }, {
                    expand: true,
                    flatten: true,
                    src: 'src/fonts',
                    dest: 'dist/fonts/'
                }]
            },
            images: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'src/img/*',
                    dest: 'dist/img/'
                }]
            }
        },
        filerev: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            images: { src: 'dist/img/*' },
            js:     { src: 'dist/js/*' },
            css:    { src: 'dist/css/*' }
        },
        jade: {
            index: {
                files: {
                    'index.html': 'src/index.jade'
                }
            },
            options: {
                pretty: true
            }
        },
        sass: {
            compile: {
                options: {
                    style: 'expanded'
                },
                src: 'src/css/PrintTheLove.scss',
                dest: 'dist/css/PrintTheLove.css'
            }
        },
        usemin: {
            html: ['index.html']
        },
        useminPrepare: {
            options: {
                dest: '.'
            },
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
