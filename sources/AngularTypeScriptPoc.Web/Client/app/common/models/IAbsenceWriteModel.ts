import {AbsenceType} from 'AbsenceType';
import {IEntity} from 'IEntity';

export interface IAbsenceWriteModel {
	id?: number;
	employee: IEntity,
	absenceType: AbsenceType;
	beginDate: string;
	endDate: string;
	remark: string;
}