import {AbsenceType} from 'AbsenceType';
import {AbsenceStatus} from 'AbsenceStatus';
import {IEmployeeReadModel} from 'IEmployeeReadModel';

export interface IAbsenceReadModel {
	id: number;
	employee: IEmployeeReadModel;
	absenceType: AbsenceType;
	beginDate: string;
	endDate: string;
	remark: string;
	absenceStatus: AbsenceStatus;
}