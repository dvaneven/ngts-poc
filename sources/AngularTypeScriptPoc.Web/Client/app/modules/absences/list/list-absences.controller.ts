import 'angular';
import {View} from '../../../common/framework';
import {app} from '../../../app';
import {IAbsenceService} from '../../../common/services/IAbsenceService';
import {IAbsenceReadModel} from '../../../common/models/IAbsenceReadModel';

// explicit imports
import '../../../common/services/AbsenceService';
import '../_shared/absence-status';
import '../../../common/filters/absenceTypeText';

@View({templateUrl: '/app/modules/absences/list/list-absences.html'})
export class ListAbsencesController {

	absences: IAbsenceReadModel[];

	constructor(private absenceService: IAbsenceService, private $location: ng.ILocationService) {

		// get all absences
		this.absenceService.getAll().then(absences => {
			this.absences = absences;
		});
	}

	newAbsence():void {
		this.$location.url('/absences/new');
	}

	showAbsence(id: number):void {
		this.$location.url('/absences/' + id);
	}

}

// register controller with app
app.controller('ListAbsencesController', ListAbsencesController);