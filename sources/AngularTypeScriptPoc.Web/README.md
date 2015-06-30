#AngularJS 1.4 with TypeScript POC#

A proof of concept of AngularJS 1.4 with TypeScript. Any similarties with already existing products are mere coincidence.

- RESTful services with ASP.NET Web API
- TypeScript 1.5
- Angular 1.4
- Gulp

## How to build ##

Some instructions on how to do a build of the client-side code.

1\. Install npm, bower & gulp globally

    npm install -g bower
    npm install -g gulp


3\. Install packages

    npm install

This command also installs the bower packages.

4\. Do a build of the client-side code

	cd .\sources\AngularTypeScriptPoc.Web

    gulp build

Build results are placed in the wwwroot folder of the web project as will be the convention with Visual Studio 2015.

*NOTE: During development you can use a watch* 

	gulp watch

*NOTE: To see a complete list of gulp tasks*

	gulp help


5\. Fire up Visual Studio 2013 and hit run!


Done!