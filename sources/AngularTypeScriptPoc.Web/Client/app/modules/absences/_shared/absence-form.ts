import {app} from '../../../app';
import {AbsenceType} from '../../../common/models/AbsenceType';
import 'lodash';

// explicit imports
import '../../../common/services/EmployeeService';
import '../../../common/filters/absenceTypeText';

var absenceForm = () => {

	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/app/modules/absences/_shared/absence-form.html',
		scope: {},
		bindToController: {
			absence: '=',
			save: '&',
			cancel: '&'
		},
		controllerAs: 'vm',
		controller: function(employeeService) {

			var vm = this;
			vm.employees = [];
			vm.saveAbsence = saveAbsence;
			vm.beginDatePickerOpen = false;
			vm.endDatePickerOpen = false;
			vm.toggleBeginDatePicker = toggleBeginDatePicker;
			vm.toggleEndDatePicker = toggleEndDatePicker;
			vm.absenceTypes = _.chain(AbsenceType)
				.filter(value => typeof value === "number")
				.value();;
			activate();

			function activate() {

				// load all employees
				employeeService.getAll().then(function(employees) {
					vm.employees = employees;
				});
			}


			function saveAbsence(form: ng.IFormController) {

				// call save if form is valid
				if (form.$valid)
					vm.save();
			}


			function toggleBeginDatePicker($event) {
				$event.preventDefault();
				$event.stopPropagation();
				vm.beginDatePickerOpen = !vm.beginDatePickerOpen;
				vm.endDatePickerOpen = false;
			}


			function toggleEndDatePicker($event) {
				$event.preventDefault();
				$event.stopPropagation();
				vm.endDatePickerOpen = !vm.endDatePickerOpen;
				vm.beginDatePickerOpen = false;
			}
		}
	}

}

// register directive with app
app.directive('absenceForm', absenceForm);