// loginController.js

var app = angular.module('ngJist');

app.controller("loginController", function($scope, authenticationService, $location) {

	$scope.displayError = false;


	// Login User
	$scope.loginUser = function(user){
		authenticationService.loginNewUser(user)
		.then(function(response) {
			saveToken(response.data.jwt);
			if (response.status < 400) {
				console.log(response);
				$location.url('/home');
			}
		}).catch(function(e){
			$scope.displayError = true;
		});
	};
	
	
});

