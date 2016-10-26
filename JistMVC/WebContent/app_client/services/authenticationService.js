// authenticationService.js

var app = angular.module('ngJist');

app.factory('authenticationService', function($http, authenticationService) {
	// Place JWT into local storage
	var saveToken = function(Token) {
		$window.localStorage['job-token'] = token;
	};
	
	// Retrieve JWT from local storage
	var getToken = function() {
		return $window.localStorage['job-token'];
	};
	
	// Contact the server, authenticate user credentials
	var login = function(user) {
		return $http({
			method : 'POST',
			url : 'api/auth/login',
			headers : {
                'Content-Type' : 'application/json'
              },
            data : user
		})
		.then(function(response){
            console.log(response);
          });
	};
	
	 // Remove JWT from local storage
    var logout = function() {
      $window.localStorage.removeItem('job-token');
    };

    // Check that a user's login is valid (present AND not expired)
    var isLoggedIn = function() {
      var token = getToken();

      if (token) {
        // $window.atob decodes a the encoded string
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;

      } else {
        return false;
      }
    };
    
 // Get current user from JWT
    var currentUser = function() {
      if (isLoggedIn()) {
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return {
          username : payload.username,
          id : payload.id
        };
      }
    };

    return {
      login : login,
      logout : logout,
      isLoggedIn : isLoggedIn,
      currentUser : currentUser,
      getToken : getToken
    }
	
})

