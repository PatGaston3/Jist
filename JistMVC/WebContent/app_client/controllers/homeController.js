// homeController.js

var app = angular.module('ngJist');

app.controller("homeController", function($scope, $http, authenticationService, $location, jobService) {
	
	$scope.user = {};
	$scope.jobs = [];
	$scope.inactiveJob = [];
	
	$scope.logOut = function(){
		authenticationService.logout();
	};
	
	$scope.addJobRedirect = function() {
		$location.url('/addlisting');
	};

	$scope.loadUser= function(){
		return authenticationService.currentUser()
	}
	
	$scope.alertInactive = function() {
		jobService.getJobs().then(function(response) {
			$scope.jobs = response.data;
		});
	}
	
	$scope.alertInactive();
	
});