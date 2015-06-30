import 'angular';
import {View} from '../../../common/framework';
import {app} from '../../../app';
import {IAbsenceService} from '../../../common/services/IAbsenceService';
import {IAbsenceWriteModel} from '../../../common/models/IAbsenceWriteModel';

// explicit imports
import '../_shared/absence-form';
import '../../../common/services/AbsenceService';

@View({templateUrl: '/app/modules/absences/new/new-absence.html'})
class NewAbsenceController {

	absence: IAbsenceWriteModel = {
		employee: null,
		absenceType: null,
		beginDate: null,
		endDate: null,
		remark: null
	}


	constructor(private absenceService: IAbsenceService, private $location: ng.ILocationService) {
	}


	saveAbsence(): void {

		this.absenceService.create(this.absence).then(() => {
			this.$location.url('/absences');
		});
	}


	cancel(): void {

		this.$location.url('/absences');
	}
}

// register controller with app
app.controller('NewAbsenceController', NewAbsenceController);