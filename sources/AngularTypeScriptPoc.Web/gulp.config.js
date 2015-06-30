module.exports = function() {

	var wwwroot = 'wwwroot';

	var config = {

		wwwroot: wwwroot,

		// source files
		htmlFile: 'client/index.html',
		scriptFiles: 'client/app/**/*.ts',
		templateFiles: 'client/app/**/*.html',
		styleFiles: 'client/styles/styles.less',
		imageFiles: 'client/images/**/*.*',
		
		// destination directories
		vendorDest: wwwroot + '/vendor',
		scriptDest: wwwroot + '/app',
		templateDest: wwwroot + '/app',
		styleDest: wwwroot + '/styles',
		imageDest: wwwroot + '/images',

		// destination files (used for clean tasks)
		vendorDestFiles: wwwroot + '/vendor/**/*',
		scriptDestFiles: wwwroot + '/app/**/*.js',
		templateDestFiles: wwwroot + '/app/**/*.html',
		styleDestFiles: wwwroot + '/styles/**/*',
		imageDestFiles: wwwroot + '/images/**/*',

		// inject sources
		vendorInjectSources: ['vendor/**/*.*'],
		customInjectSources: ['styles/**/*.css']
	}

	return config;
};