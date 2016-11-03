// addJobController

var app = angular.module('ngJist');

app.controller('addJobController', function($scope, jobService, $location, authenticationService) {

	$scope.addJob = {};

	$scope.createJob = function(job) {
		jobService.createJob(job)
		.then(function(response) {
			$scope.addJob = response.data;
			$location.url('/jobs');
		});
	};

	$scope.logOut = function(){
		authenticationService.logout();
		$location.url('/login');
	};
});
