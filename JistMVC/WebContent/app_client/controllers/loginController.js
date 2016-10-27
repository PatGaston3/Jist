// loginController.js

var app = angular.module('ngJist');

app.controller("loginController", function($scope, authenticationService, $location) {

	// Login User
	$scope.loginUser = function(user){
		authenticationService.loginNewUser(user)
		.then(function(response) {
			$location.url('/home');
		}).catch(function(error){
			console.log(error);
		})
	}
});
