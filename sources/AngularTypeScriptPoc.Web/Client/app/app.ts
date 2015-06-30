import 'angular';

var app = angular
	.module('app', ['ngNewRouter', 'ui.bootstrap'])
	.config(($locationProvider: ng.ILocationProvider, $componentLoaderProvider: any) => {

		$locationProvider.html5Mode(true);

		// customize mapping of components to template
		$componentLoaderProvider
			.setTemplateMapping(function(componentName) {

				// extract templateUrl specified on component controller with the '@View' decorator
				const templateUrl = window['controllers'][this.controllerName(componentName)];

				if (!templateUrl)
					console.error(`Unable to resolve template for component '${componentName}'.`);

				return templateUrl;
			});

	})
	.config((datepickerConfig: any, datepickerPopupConfig: any) => {

		// global datepicker configuration
		datepickerConfig.startingDay = 1;
		datepickerConfig.showWeeks = false;

		// global datepicker popup configuration
		datepickerPopupConfig.datepickerPopup = 'dd/MM/yyyy';
		datepickerPopupConfig.currentText = 'Vandaag';
		datepickerPopupConfig.clearText = 'Leeg';
		datepickerPopupConfig.closeText = 'Sluiten';
	})
	.run(($location: ng.ILocationService) => {
		
		// redirect to login page on entry
		if ($location.path() == '/')
			$location.url('/login');
	});

export {app};