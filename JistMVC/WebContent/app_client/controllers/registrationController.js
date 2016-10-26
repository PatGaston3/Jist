// loginController.js

var app = angular.module('ngJist');

app.controller("registrationController", function($scope, registrationService, $location) {
	
	// Create New User
	$scope.genUser = function(user){
		registrationService.createUser(user)
		.then(function(response) {
			if (response.status === 201) {
				$location.url('/');
			}
		})
	}
	
});