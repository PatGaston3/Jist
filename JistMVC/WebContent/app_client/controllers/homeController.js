// homeController.js

var app = angular.module('ngJist');

app.controller("homeController", function($scope, authenticationService) {
	
	$scope.logOut = function(){
		authenticationService.logout();
	}
});