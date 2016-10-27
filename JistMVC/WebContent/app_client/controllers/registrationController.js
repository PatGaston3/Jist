// loginController.js

var app = angular.module('ngJist');

app.controller("registrationController", function($scope, registrationService, $location, authenticationService) {
	
	// Create New User
	$scope.genUser = function(user){
		console.log("IN GEN USER!!!")
		registrationService.createUser(user)
		.then(function(response) {
			if (response.status === 200) {
				console.log(response);
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