// ngApp.js

var app = angular.module('ngJist', ['ngRoute', 'chart.js', 'ui.bootstrap'])
.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'landing.view.html',
		controller: 'landingController'
	})
	.when('/login',{
		templateUrl: 'login.view.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'home.view.html',
		controller: 'homeController'
	})
	.when('/jobs',{
		templateUrl: 'jobs.view.html',
		controller: 'jobController'
	})
	.when('/details',{
		templateUrl: 'details.view.html',
		controller: 'detailController'
	})
	.when('/register',{
		templateUrl: 'register.view.html',
		controller: 'registrationController'
	})
	.when('/addlisting', {
		templateUrl: 'addjob.view.html',
		controller: 'addJobController'
	})
	.when('/info', {
		templateUrl: 'info.view.html',
		controller: 'infoController'
	})
	.otherwise({
	      redirectTo: '/'
	});
});
