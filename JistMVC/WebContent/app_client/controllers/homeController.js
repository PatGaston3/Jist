// homeController.js

var app = angular.module('ngJist');

app.controller("homeController", function($scope, jobService) {
	
	
	$scope.getUser = function() {
		return jobService.getUser();
	}
	
	
});