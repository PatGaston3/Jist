// loginController.js

var app = angular.module('ngJist');

app.controller("loginController", function($scope, authenticationService, $location, jobService) {

	$scope.displayError = false;
	$scope.jobs = [];

	// Login User
	$scope.loginUser = function(user){
		authenticationService.loginNewUser(user)
		.then(function(response) {
			authenticationService.saveToken(response.data.jwt);
			if (response.status < 400) {
				$location.url('/home');
			}
			return response;
		})
		
	};
	
	

	
	
});

