// loginController.js

var app = angular.module('ngJist');

app.controller("loginController", function($scope, authenticationService, $location, jobService) {

	$scope.displayError = false;
	$scope.jobs = [];
	console.log("Initialized empty $scope.jobs array");


	// Login User
	$scope.loginUser = function(user){
		console.log(user);
		authenticationService.loginNewUser(user)
		.then(function(response) {
			authenticationService.saveToken(response.data.jwt);
			if (response.status < 400) {
				console.log(response);
				$location.url('/home');
			}
			return response;
		})
		
	};
	
	

	
	
});

