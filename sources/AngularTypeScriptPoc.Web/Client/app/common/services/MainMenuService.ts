import 'angular';
import {app} from '../../app';
import {IMainMenuService} from 'IMainMenuService';
import {MainMenuItem} from '../models/MainMenuItem';

export class MainMenuService implements IMainMenuService {
	activeMenuItem: MainMenuItem;
} 

// register service with app
app.service('mainMenuService', MainMenuService);