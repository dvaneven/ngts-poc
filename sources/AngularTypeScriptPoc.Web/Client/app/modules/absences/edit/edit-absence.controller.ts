import 'angular';
import {View} from '../../../common/framework';
import {app} from '../../../app';
import {IAbsenceService} from '../../../common/services/IAbsenceService';
import {IAbsenceReadModel} from '../../../common/models/IAbsenceReadModel';

// explicit imports
import {AbsenceService} from '../../../common/services/AbsenceService';


@View({templateUrl: '/app/modules/absences/edit/edit-absence.html'})
export class EditAbsenceController {

	absence: IAbsenceReadModel;

	constructor(
		private absenceService: IAbsenceService,
		private $location: ng.ILocationService,
		private $routeParams: any) {
	}


	canActivate(): ng.IPromise<boolean> {

		return this.absenceService.getById(this.$routeParams.id).then(absence => {
			this.absence = absence;
			return true;
		});
	}


	saveAbsence(): void {

		this.absenceService.update(this.absence).then(() => {
			this.$location.url('/absences/' + this.$routeParams.id);
		});
	}


	cancel(): void {

		this.$location.url('/absences/' + this.$routeParams.id);
	}
}

// register controller with app
app.controller('EditAbsenceController', EditAbsenceController);