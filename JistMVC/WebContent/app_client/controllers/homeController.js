// homeController.js

var app = angular.module('ngJist');

app.controller("homeController", function($scope, authenticationService, jobService, $location) {
	
	$scope.user = {};
	$scope.alert = {};
	
	$scope.logOut = function(){
		authenticationService.logout();
	};
	
	$scope.addJobRedirect = function() {
		$location.url('/addlisting');
	};

	$scope.loadUser= function(){
		return authenticationService.currentUser()
	    }

	$scope.alertUser = function() {
		return jobService.getJobs()
	}

	
});