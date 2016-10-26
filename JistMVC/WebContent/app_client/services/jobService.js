// jobService.js

var app = angular.module('ngJist');

app.factory('jobService', function($http, authenticationService) {
	
	var jobService = {};

	// *******************************
	//  JOBS
	// *******************************
	
	// GET JOBS
	var getJobs = function() {
		var userId = null;
		if (authenticationService,isLoggedIn()) {
			userId = authenticationService.currentUser().id;
		}
		return $http({
			method : 'GET',
			url: 'api/user/' + userId + '/jobs',
			headers : {
				'x-access-token' : authenticationService.getToken()
			}
		})
	};
	
	
	// CREATE JOB
	var createJob = function(job) {
		var userId = null;
		if (authenticationService.isLoggedIn()) {
			userId = authenticationService.currentUser().id;
		}
		return $http({
			method : 'POST',
			url : 'api/user/' + userId + '/jobs',
			headers : {
				'Content-Type' : 'application/json',
				'x-access-token' : authenticationService.getToken()
			},
			data : job
		})
	}
	
	// DELETE JOB
	var deleteJob = function(job) {
		var userId = null;
		if (authenticationService.isLoggedIn()) {
			userId = authenticationService.currentUser().id;
		}
		return $http({
			method : 'DELETE',
			url : 'api/user/' + userId + '/jobs/' + jobId,
			headers : {
				'x-access-token' : authenticationService.getToken()
			}
		})
	};
	
	// UPDATE JOB
	var updateJob = function(job) {
		var userId = null;
		if (authenticationService.isLoggedIn()) {
			userId = authenticationService.currentUser().id;
		}
		return $http({
			method : 'PUT',
			url : 'api/user/' + userId + '/jobs/' + jobId,
			headers : {
				'Content-Type' : 'application/json',
				'x-access-token' : authenticationService.getToken()
			},
			data : job
		})
	};
	
	
	return {
		getJobs : getJobs,
		createJob : createJob,
		deleteJob : deleteJob,
		updateJob : updateJob
	};
	
	return jobService;
	
})

