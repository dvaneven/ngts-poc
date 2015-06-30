import 'angular';
import {View} from '../../common/framework';
import {app} from '../../app';
import {IMainMenuService} from '../../common/services/IMainMenuService';
import {MainMenuItem} from '../../common/models/MainMenuItem';

// explicit imports
import '../../common/services/MainMenuService';
import '../absences/list/list-absences.controller';
import '../absences/new/new-absence.controller';
import '../absences/show/show-absence.controller';
import '../absences/edit/edit-absence.controller';

@View({templateUrl: '/app/modules/absences/absences.html'})
export class AbsencesController {

	static $routeConfig = [
		{ path: 'absences', component: 'listAbsences' },
		{ path: 'absences/new', component: 'newAbsence' },
		{ path: 'absences/:id', component: 'showAbsence' },
		{ path: 'absences/:id/edit', component: 'editAbsence' }
	];


	constructor(private mainMenuService: IMainMenuService) {
	}


	activate(): void {
		this.mainMenuService.activeMenuItem = MainMenuItem.Absences;
	}
}

// register controller with app
app.controller('AbsencesController', AbsencesController);