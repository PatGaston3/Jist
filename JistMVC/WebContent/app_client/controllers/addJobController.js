// addJobController

var app = angular.module('ngJist');

app.controller('addJobController', function($scope, jobService) {
	
	$scope.addJob = {};
	
	$scope.createJob = function(job) {
		jobService.createJob(job).then(function(response) {
			$scope.addJob = response.data;
		});
	};
});