import 'angular';
import "angular-router";
import {View} from '../common/framework';
import {app} from "../app";

// explicit imports
import "../layout/main-menu.directive";
import '../home/home';
import '../modules/absences/absences';

@View({templateUrl: '/app/layout/main.html'})
export class MainController {

	static $routeConfig = [
		{ path: 'home', component: 'home' },
		{ path: '', component: 'absences' }
	];
}

// register controller with app
app.controller('MainController', MainController);