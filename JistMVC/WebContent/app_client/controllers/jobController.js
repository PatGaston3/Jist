// jobController.js

var app = angular.module('ngJist');

app.controller("jobController", function($scope, jobService, authenticationService, $location) {

	$scope.jobs = [];

	$scope.loadJobs = function() {
		jobService.getJobs().then(function(response) {
			$scope.jobs = response.data;
		});
	}

	$scope.loadJobs();

	// Delete Job
	$scope.delete = function(job) {
		jobService.deleteJob(job)
		.then(function(response) {
			$scope.loadJobs();
		})
	}

	// Update Job
	$scope.edit = function(job) {
		jobService.updateJob(job)
		.then(function(response) {
			$scope.loadJobs();
		})
	}


	  $scope.warnUser = function(){
		  return ($scope.totalCount() > 0)
		  ? "warnMe"
				  : "label-success";
	  }

	$scope.totalCount = function() {
		return $scope.jobs.length;
	}


	// Logout User
	$scope.logOut = function(){
		authenticationService.logout();
		$location.url('/login');
	}

});
