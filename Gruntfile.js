/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		wp_deploy: {
			deploy: {
				options: {
					plugin_slug: 'site-last-modified',
					build_dir: 'build', //relative path to your build directory
					assets_dir: 'wporg-assets' //relative path to your assets directory (optional).
				}
			}
		},
		copy: {
			build: {
				files: [
					{
						expand: true,
						src: [ 'site-last-modified.php', 'readme.txt' ],
						dest: 'build/'
					}
				]
			}
		},
		clean: {
			build: [ 'build' ]
		}
	});

	grunt.loadNpmTasks( 'grunt-wp-deploy' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );

	grunt.registerTask( 'build', [ 'clean:build', 'copy:build' ] );
	grunt.registerTask( 'deploy', [ 'build', 'wp_deploy:deploy' ] );

};