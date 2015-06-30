var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy: true });
var args = require('yargs').argv;
var del = require('del');


/**************************
 *** VENDOR ***************
 **************************/
gulp.task('clean-vendor', function (done) {
	log('Cleaning vendor files...');

	del(config.vendorDestFiles, done);
});

gulp.task('vendor', ['clean-vendor'], function () {
	log('Copying vendor files to wwwroot...');

	var mainBowerFiles = require('main-bower-files');

	return gulp
		.src(mainBowerFiles(), { base: './bower_components' }) // load main bower files
		.pipe($.addSrc('./node_modules/angular-new-router/dist/router.es5.js', { base: './node_modules' })) // add angular-new-router (no bower package available yet)
		.pipe($.if(args.verbose, $.print()))
		.pipe(gulp.dest(config.vendorDest));
});


/**************************
 *** SCRIPTS **************
 **************************/
gulp.task('clean-scripts', function (done) {
	log('Cleaning scripts...');

	del(config.scriptDestFiles, done);
});

gulp.task('scripts', ['clean-scripts'], function () {
	log('Compiling and copying scripts to wwwroot...');

	var result = gulp
		.src(config.scriptFiles)
		.pipe($.plumber())
		.pipe($.if(args.verbose, $.print()))
		.pipe($.sourcemaps.init())
		.pipe($.typescript({
			target: 'ES5',
			module: 'AMD',
			typescript: require('typescript')
		}));

	return result.js
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(config.scriptDest));
});


/**************************
 *** TEMPLATES ************
 **************************/
gulp.task('clean-templates', function(done) {
	log('Cleaning templates...');

	del(config.templateDestFiles, done);
});

gulp.task('templates', ['clean-templates'], function () {
	log('Copying templates to wwwroot...');

	return gulp
		.src(config.templateFiles)
		.pipe($.plumber())
		.pipe($.if(args.verbose, $.print()))
		.pipe(gulp.dest(config.templateDest));
});


/**************************
 *** STYLES ***************
 **************************/
gulp.task('clean-styles', function(done) {
	log('Cleaning styles...');

	del(config.styleDestFiles, done);
});

gulp.task('styles', ['clean-styles'], function () {
	log('Compiling and copying styles to wwwroot...');

	return gulp
		.src(config.styleFiles)
		.pipe($.less())
		.pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
		.pipe(gulp.dest(config.styleDest));
});

gulp.task('theme', function() {
	log('Applying custom bootstrap theme...');

	return gulp
		.src('client/styles/bootstrap.css')
		.pipe(gulp.dest('wwwroot/vendor/bootstrap/dist/css/'));
});


/**************************
 *** IMAGES ***************
 **************************/
gulp.task('clean-images', function (done) {
	log('Cleaning images...');

	del(config.imageDestFiles, done);
});

gulp.task('images', ['clean-images'], function () {
	log('Copying images to wwwroot...');

	return gulp
		.src(config.imageFiles)
		.pipe(gulp.dest(config.imageDest));
});


/**************************
 *** HTML *****************
 **************************/
gulp.task('html', function () {
	log('Copying html file to wwwroot and injecting scripts & styles...');

	var vendorInjectSources = gulp.src(config.vendorInjectSources, { read: false, cwd: config.wwwroot });
	var customSources = gulp.src(config.customInjectSources, { read: false, cwd: config.wwwroot });

	return gulp
		.src(config.htmlFile)
		.pipe($.plumber())
		.pipe($.inject(vendorInjectSources, { name: 'vendor' }))
		.pipe($.inject(customSources, { name: 'custom' }))
		.pipe(gulp.dest(config.wwwroot));
});


/**************************
 *** MISC *****************
 **************************/
gulp.task('clean', function (done) {
	log('Cleaning wwwroot...');

	del(config.wwwroot, done);
});

gulp.task('help', function () {
	return $.taskListing();
});


/**************************
 *** MAIN *****************
 **************************/
gulp.task('watch', function () {
	log('Watching html, scripts, templates, styles & images...');

	gulp.watch(config.htmlFile, ['html']);
	gulp.watch(config.scriptFiles, ['scripts']);
	gulp.watch(config.templateFiles, ['templates']);
	gulp.watch(config.styleFiles, ['styles']);
	gulp.watch(config.imageFiles, ['images']);
});

gulp.task('build', $.sequence('clean', ['vendor', 'scripts', 'templates', 'styles', 'images'], 'theme', 'html'));


/**************************
 *** HELPERS **************
 **************************/
function log(msg) {
	$.util.log($.util.colors.blue(msg));
}