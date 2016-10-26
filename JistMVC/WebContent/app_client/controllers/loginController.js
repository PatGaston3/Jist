// loginController.js

var app = angular.module('ngJist');

app.controller("loginController", function($scope) {
	
	// Login User
	$scope.loginUser = function(user){
		authenticationService.login(user)
		.then(function(response) {
			if (response.status === 201) {
				$location.url('/');
			}
		})
	}
});