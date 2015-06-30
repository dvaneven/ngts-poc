import 'angular';
import {app} from '../../app';
import {ILoginService} from 'ILoginService';
import {ICredentials} from '../models/ICredentials';

export class LoginService implements ILoginService {

	constructor(private $q: ng.IQService, private $timeout: ng.ITimeoutService) {
	}


	login(credentials: ICredentials): ng.IPromise<void> {

		return new this.$q((resolve, reject) => {
			
			// mimic network latency
			this.$timeout(() => {

				if (credentials.username === '') {
					reject("Username required");
				} else if (credentials.password === '') {
					reject("Password required");
				} else if (credentials.username === credentials.password) {
					resolve();
				} else {
					reject("Invalid credentials");
				}

			}, 1000);

		});
	}

}

// register service with app
app.service('loginService', LoginService);