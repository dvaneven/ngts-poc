import 'angular';
import {app} from '../app';
import {IMainMenuService} from '../common/services/IMainMenuService';

// explicit imports
import '../common/services/MainMenuService';

export function mainMenuDirective(): ng.IDirective {
	return {
		templateUrl: '/app/layout/main-menu.html',
		restrict: 'E',
		replace: true,
		controllerAs: 'vm',
		controller: function (mainMenuService: IMainMenuService) {
			var vm = this;
			vm.mainMenuService = mainMenuService;
		}
	}
}

// register directive with app
app.directive('mainMenu', mainMenuDirective);