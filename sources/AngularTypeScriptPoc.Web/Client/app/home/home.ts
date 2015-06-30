import 'angular';
import {View} from '../common/framework';
import {app} from '../app';
import {IMainMenuService} from "../common/services/IMainMenuService";
import {MainMenuItem} from '../common/models/MainMenuItem';

// explicit imports
import '../common/services/MainMenuService';

@View({templateUrl: '/app/home/home.html'})
export class HomeController {

	catNumber: number = Math.floor(Math.random() * 7);

	constructor(private mainMenuService: IMainMenuService) {
	}


	activate(): void {
		this.mainMenuService.activeMenuItem = MainMenuItem.Home;
	}
}

// register controller with app
app.controller('HomeController', HomeController);