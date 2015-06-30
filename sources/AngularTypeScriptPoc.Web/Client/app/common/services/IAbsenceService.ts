import 'angular';
import {IAbsenceReadModel} from '../models/IAbsenceReadModel';
import {IAbsenceWriteModel} from '../models/IAbsenceWriteModel';

export interface IAbsenceService {
	getAll(): ng.IPromise<IAbsenceReadModel[]>;
	getById(id: number): ng.IPromise<IAbsenceReadModel>;
	create(absence: IAbsenceWriteModel): ng.IPromise<IAbsenceReadModel>;
	update(absence: IAbsenceWriteModel): ng.IPromise<void>;
	remove(id: number): ng.IPromise<void>;
	approve(id: number): ng.IPromise<IAbsenceReadModel>;
	reject(id: number): ng.IPromise<IAbsenceReadModel>;
}