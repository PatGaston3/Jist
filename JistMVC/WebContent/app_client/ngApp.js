// ngApp.js

var app = angular.module('ngJist', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'home.view.html',
		controller: 'homeController'
	})
	.when('/login',{
		templateUrl: 'login.view.html',
		controller: 'loginController'
	})
	.when('/jobs',{
		templateUrl: 'jobs.view.html',
		controller: 'jobController'
	})
	.when('/details',{
		templateUrl: 'details.view.html',
		controller: 'detailController'
	})
	.otherwise({
	      redirectTo: '/'
	    });
});