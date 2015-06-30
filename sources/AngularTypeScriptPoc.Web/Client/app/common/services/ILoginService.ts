import 'angular';
import {ICredentials} from '../models/ICredentials';

export interface ILoginService {
	login(credentials: ICredentials): ng.IPromise<void>;
}
