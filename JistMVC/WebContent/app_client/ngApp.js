// ngApp.js

var app = angular.module('ngJist', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'home.view.html',
		controller: 'homeController'
	})
});