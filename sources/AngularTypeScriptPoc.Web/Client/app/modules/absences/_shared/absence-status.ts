import {app} from '../../../app';

var absenceStatus = () => {
	
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/app/modules/absences/_shared/absence-status.html',
		scope: {},
		bindToController: {
			absence: '='
		},
		controllerAs: 'vm',
		controller: () => {}
	}
}

// register directive with app
app.directive('absenceStatus', absenceStatus);