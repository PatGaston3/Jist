// homeController.js

var app = angular.module('ngJist');

app.controller("homeController", function($scope, authenticationService, $location) {
	
	$scope.user = {};
	
	$scope.logOut = function(){
		authenticationService.logout();
	}
	
	$scope.addJobRedirect = function() {
		$location.url('/addlisting');
	}

	$scope.loadUser= function(){
		return authenticationService.currentUser()
	      console.log(authenticationService.currentUser());
	    }

});