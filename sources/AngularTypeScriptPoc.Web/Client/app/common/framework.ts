export function View(param: { templateUrl: string }) {
    return target => {

		// get controller name (from string representation of function)
	    var controllerName = /^function\s+([\w\$]+)\s*\(/.exec(target.toString())[1];

		// store templateUrl in globally available controllers map
		if (!window['controllers']) window['controllers'] = {};
		window['controllers'][controllerName] = param.templateUrl;
    }
} 