import 'angular';
import {app} from '../../app';
import {IEmployeeService} from 'IEmployeeService';
import {IEmployeeReadModel} from '../models/IEmployeeReadModel';

export class EmployeeService implements IEmployeeService
{
	constructor(private $http: ng.IHttpService) {
	}


	getAll(): ng.IPromise<IEmployeeReadModel[]> {
		
		return this.$http.get('/api/employees')
			.then((response: ng.IHttpPromiseCallbackArg<IEmployeeReadModel[]>): IEmployeeReadModel[]=> response.data);
	}


	getById(id: number): ng.IPromise<IEmployeeReadModel> {
		
		return this.$http.get('/api/employees/' + id)
			.then((response: ng.IHttpPromiseCallbackArg<IEmployeeReadModel>): IEmployeeReadModel => response.data);
	}
}

// register service with app
app.service("employeeService", EmployeeService);