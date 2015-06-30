import "angular";
import {View} from '../common/framework';
import {app} from "app";
import {ILoginService} from "../common/services/ILoginService";
import {ICredentials} from "../common/models/ICredentials";

// explicit imports
import "../common/services/LoginService";

@View({templateUrl: '/app/login/login.html'})
export class LoginController {

	rememberMe: boolean = true;
	message: string;
	loginButtonDisabled: boolean = false;


	constructor(private loginService: ILoginService, private $location: ng.ILocationService) {
	}


	login(): void {
		
		// disable login button 
		this.loginButtonDisabled = true;

		// gathering credentials using jQuery to work around form autocomplete issues
		var credentials: ICredentials = {
			username: $('#username').val(),
			password: $('#password').val()
		}

		this.loginService.login(credentials)
			.then(() => {

				// go to application
				this.$location.url('/home');
			})
			.catch(() => {

				// show error message
				this.message = 'Gebruikersnaam of wachtwoord niet correct';
				this.loginButtonDisabled = false;
			});
	}
}

// register controller with app
app.controller("LoginController", LoginController);
