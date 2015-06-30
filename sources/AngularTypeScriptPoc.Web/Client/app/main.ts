/// <reference path="../../typings/tsd.d.ts" />
require.config({
	baseUrl: 'app',
	paths: {
		'jquery': '../vendor/jquery/dist/jquery',
		'lodash': '../vendor/lodash/lodash',
		'angular': '../vendor/angular/angular',
		'angular-router': '../vendor/angular-new-router/dist/router.es5'
	},
	shim: {
		'jquery': { exports: 'jquery' },
		'lodash': { exports: 'lodash' },
        'angular': { exports: 'angular', dep: ['jquery'] },
        'angular-router': { exports: 'angular-router', dep: ['angular'] }
	}
});


require(['angular', 'angular-router', 'app', 'app.controller'], (angular: ng.IAngularStatic) => {
	angular.bootstrap(document, ['app']);
});