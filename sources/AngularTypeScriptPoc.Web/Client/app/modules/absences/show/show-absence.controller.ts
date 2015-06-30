import 'angular';
import {View} from '../../../common/framework';
import {app} from '../../../app';
import {IAbsenceReadModel} from '../../../common/models/IAbsenceReadModel';
import {IAbsenceService} from '../../../common/services/IAbsenceService';
import {AbsenceStatus} from '../../../common/models/AbsenceStatus';

// explicit imports
import '../../../common/services/AbsenceService';
import '../_shared/absence-status';
import '../../../common/models/AbsenceStatus';
import '../../../common/filters/absenceTypeText';

@View({templateUrl: '/app/modules/absences/show/show-absence.html'})
export class ShowAbsenceController {

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


	back(): void {
		this.$location.url('/absences');
	}


	edit(): void {
		this.$location.url('/absences/' + this.$routeParams.id + '/edit');
	}


	remove(): void {
		this.absenceService.remove(this.$routeParams.id).then(() => {
			this.$location.url('/absences');
		});
	}


	approveAbsence(): void {

		this.absenceService.approve(this.$routeParams.id)
			.then(absence => { this.absence = absence });
	}


	rejectAbsence(): void {
		this.absenceService.reject(this.$routeParams.id)
			.then(absence => { this.absence = absence });
	}


	absenceIsPending(): boolean {
		return this.absence.absenceStatus === AbsenceStatus.Pending;
	}
}

// register controller with app
app.controller('ShowAbsenceController', ShowAbsenceController);