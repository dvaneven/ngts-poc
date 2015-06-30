import 'angular';
import {app} from 'app';
import {AbsenceType} from '../models/AbsenceType';


var absenceTypeText = () => {
	return value => {
		switch(value) {
			case AbsenceType.AnnualLeave:
				return 'Vakantie';
			case AbsenceType.SickLeave:
				return 'Ziekteverlof';
			case AbsenceType.MaternityLeave:
				return 'Zwangerschapsverlof';
			case AbsenceType.ParentalLeave:
				return 'Ouderschapsverlof';
			case AbsenceType.CarersLeave:
				return 'Zorgverlof';
			default:
				throw "Unknown absence type.";
		}
	};
}


// register filter with app
app.filter('absenceTypeText', absenceTypeText);