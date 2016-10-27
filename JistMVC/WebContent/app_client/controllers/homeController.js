// homeController.js

var app = angular.module('ngJist');

app.controller("homeController", function($scope, authenticationService, $location) {
	
	$scope.logOut = function(){
		authenticationService.logout();
	};
	
	$scope.addJobRedirect = function() {
		$location.url('/addlisting');
	};

});