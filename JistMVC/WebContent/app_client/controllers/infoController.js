// infoController.js

var app = angular.module('ngJist');

app.controller("infoController", function($scope, $location, authenticationService) {
	
	$scope.logOut = function(){
		authenticationService.logout();
		$location.url('/');
	};
	
});

