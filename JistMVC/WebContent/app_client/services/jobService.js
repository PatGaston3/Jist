// jobService.js

var app = angular.module('ngJist');


app.factory('jobService', function($http, authenticationService, $location) {


	var jobService = {};

	// *******************************
	//  JOBS
	// *******************************

	// GET JOBS
	var getJobs = function() {
		var userId = null;
		if (authenticationService.isLoggedIn()) {
			userId = authenticationService.currentUser().id;
		}
		return $http({
			method : 'GET',
			url: 'api/user/' + userId + '/joblist',
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
			url : 'api/user/' + userId + '/joblist',
			headers : {
				'Content-Type' : 'application/json',
				'x-access-token' : authenticationService.getToken()
			},
			data : job
		});
//		.then(function() {
//			$location.url('/jobs');
//		})
	}
	

	// DELETE JOB
	var deleteJob = function(job) {
		var userId = null;
		if (authenticationService.isLoggedIn()) {
			userId = authenticationService.currentUser().id;
		}
		return $http({
			method : 'DELETE',
			url : 'api/user/' + userId + '/joblist/' + job.id,
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
			url : 'api/user/' + userId + '/joblist/' + job.id,
			headers : {
				'Content-Type' : 'application/json',
				'x-access-token' : authenticationService.getToken()
			},
			data : job
		})
	};
	
	var glassDoor = function() {
		var company = job.companyName;

		return $http({
			method : 'GET',
			url: 'http://api.glassdoor.com/api/api.htm?',

			headers : {
				'x-access-token' : authenticationService.getToken()
			}
		})
	};
	
	var totalNumber = 0;
	
	var setTotalAlerts = function(alertOne, alertTwo) {
		totalNumber = alertOne + alertTwo;
	}
	
	var getTotalAlerts = function() {
		return totalNumber;
	}

	return {
		getJobs : getJobs,
		createJob : createJob,
		deleteJob : deleteJob,
		updateJob : updateJob,
		setTotalAlerts : setTotalAlerts,
		getTotalAlerts : getTotalAlerts
	};

	return jobService;

})
