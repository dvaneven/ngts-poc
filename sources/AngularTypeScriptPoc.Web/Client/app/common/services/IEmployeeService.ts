import 'angular';
import {IEmployeeReadModel} from '../models/IEmployeeReadModel';

export interface IEmployeeService {
	getAll(): ng.IPromise<IEmployeeReadModel[]>;
	getById(id: number): ng.IPromise<IEmployeeReadModel>;
} 