// homeController.js

var app = angular.module('ngJist');


app.controller("homeController", function($scope, $http, authenticationService, $location, jobService) {
	
	$scope.user = {};
	$scope.jobs = [];
	$scope.inactiveJob = [];

	$scope.jobs = [];
	
	$scope.loadJobs = function() {
		jobService.getJobs()
		.then(function(response) {
			$scope.jobs = response.data;
		})
	}
	
	$scope.logOut = function(){
		authenticationService.logout();
		$location.url('/');
	};
	
	// Delete Job
	$scope.delete = function(job) {
		jobService.deleteJob(job)
		.then(function(response) {
			$scope.loadJobs();
		})
		.then(function(){
			$location.url('/jobs');
		})
	}
	
	$scope.addJobRedirect = function() {
		$location.url('/addlisting');
	};

	$scope.loadUser= function(){
		return authenticationService.currentUser();
	}
	
	$scope.alertInactive = function() {
		jobService.getJobs()
		.then(function(response) {
			$scope.jobs = response.data;
		})
		.catch(function(error) {
			$location.url('/');
		})
	}
	
	
	 $scope.jobCounter = function(){
		  return ($scope.max() > -1)
		  ? "jobCounter"
				  : "label-success";
	  }
	
	$scope.max = function(){
		return jobService.getTotalAlerts();
	}
	
	$scope.alertInactive();

	
});