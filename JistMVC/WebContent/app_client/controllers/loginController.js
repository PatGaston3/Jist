// loginController.js

var app = angular.module('ngJist');

app.controller("loginController", function($scope, authenticationService, $location) {
	
	// Login User
	$scope.loginUser = function(user){
		authenticationService.loginNewUser(user)
		.then(function(response) {
			console.log(response);
			if (response.status < 400) {
				console.log('in the loginController loginUser method');
				$location.url('/');
			}
			console.log('response in loginController: ' + response);
		})
	}
});