var app = angular.module('ngJist');

app.factory('userService', function($http, $window, $location, authenticationService) {


userService.getUserInfo = function() {
		var userId = null;
		if (authenticationService.isLoggedIn()) {
			userId = authenticationService.currentUser().id;
		}
		return $http({
			method : 'GET',
			url : 'api/users/' + userId,
			headers : {
				'x-access-token' : authenticationService.getToken()
			}
		})
	};
	
});