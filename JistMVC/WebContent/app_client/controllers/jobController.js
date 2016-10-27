// jobController.js

var app = angular.module('ngJist');

app.controller("jobController", function($scope, jobService) {

	$scope.jobs = [];

	$scope.loadJobs = function() {
		jobService.getJobs().then(function(response) {
			$scope.jobs = response.data;
		});
	}

	$scope.loadJobs();

	// Create new task on submit
	// $scope.submit = function(job){
	// if (job) {
	// var newJob = {task: task, completed: false};
	// jobService.createjob(newT)
	// .then(function(reponse) {
	// $scope.loadjobs();
	// $scope.task = "";
	// })
	// }
	// }

	// Delete Job
	$scope.destroy = function(job) {
		jobService.deleteJob(job).then(function(response) {
			$scope.loadJobs();
		})
	}

	// Update Job
	$scope.edit = function(job) {
		console.log("in edit");
		jobService.updateJob(job).then(function(response) {
			$scope.loadJobs();
		})
	}

//	$scope.incompleteJobs = function() {
//		var incomplete = 0;
//		$scope.jobs.forEach(function(job) {
//			if (!job.completed) {
//				++incomplete;
//			}
//		});
//		return incomplete;
//	}

	$scope.totalCount = function() {
		return $scope.jobs.length;
	}

});
