// loginController.js

var app = angular.module('ngJist');

app.controller("registrationController", function($scope, registrationService, $location, authenticationService) {

	// Create New User
	$scope.genUser = function(user){
		registrationService.createUser(user)
		.then(function(response) {
			if (response.status < 400) {
				authenticationService.saveToken(response.data.jwt);
			}
		})
		.then(function(){
			$location.url('/home');
		})
		.catch(function(err){
			// tell the user things went wrong
			$location.url('/login');
		})
	}

});
