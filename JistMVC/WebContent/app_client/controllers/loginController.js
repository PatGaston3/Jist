// loginController.js

var app = angular.module('ngJist');

app.controller("loginController", function($scope, authenticationService, $location) {
	
	// Login User
	$scope.loginUser = function(user){
		authenticationService.loginNewUser(user)
		.then(function(response) {
			if (response.status < 400) {
				$location.url('/');
			}
		})
	}
});