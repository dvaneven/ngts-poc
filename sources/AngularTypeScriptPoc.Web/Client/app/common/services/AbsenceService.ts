import 'angular';
import {app} from '../../app';
import {IAbsenceService} from 'IAbsenceService';
import {IAbsenceReadModel} from '../models/IAbsenceReadModel';
import {IAbsenceWriteModel} from '../models/IAbsenceWriteModel';

export class AbsenceService implements IAbsenceService {

	constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
	}


	getAll(): ng.IPromise<IAbsenceReadModel[]> {

		return this.$http.get('/api/absences')
			.then((response: ng.IHttpPromiseCallbackArg<IAbsenceReadModel[]>): IAbsenceReadModel[] => response.data);
	}


	getById(id: number): ng.IPromise<IAbsenceReadModel> {

		return this.$http.get('/api/absences/' + id)
			.then((response: ng.IHttpPromiseCallbackArg<IAbsenceReadModel>): IAbsenceReadModel => response.data);
	}


	create(absence: IAbsenceWriteModel): ng.IPromise<IAbsenceReadModel> {
		
		return this.$http.post('/api/absences', absence)
			.then((response: ng.IHttpPromiseCallbackArg<IAbsenceReadModel>): IAbsenceReadModel => response.data);
	}


	update(absence: IAbsenceWriteModel): ng.IPromise<void> {

		if (!absence.hasOwnProperty('id'))
			throw new Error('Cannot update absence because it\'s id is missing.');

		return this.$http.put('/api/absences/' + absence.id, absence)
			.then((): void => undefined);
	}


	remove(id: number): ng.IPromise<void> {
		
		return this.$http.delete('/api/absences/' + id)
			.then((): void => undefined);
	}


	approve(id: number): ng.IPromise<IAbsenceReadModel> {
		
		return this.$http.post('/api/absences/' + id + '/approve', {})
			.then((response: ng.IHttpPromiseCallbackArg<IAbsenceReadModel>): IAbsenceReadModel => response.data);
	}


	reject(id: number): ng.IPromise<IAbsenceReadModel> {

		return this.$http.post('/api/absences/' + id + '/reject', {})
			.then((response: ng.IHttpPromiseCallbackArg<IAbsenceReadModel>): IAbsenceReadModel => response.data);
	}
}

// register service with app
app.service("absenceService", AbsenceService);