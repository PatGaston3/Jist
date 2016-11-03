// authenticationService.js

var app = angular.module('ngJist');

app.factory('authenticationService', function($http, $window, $location) {
	// Place JWT into local storage
	var saveToken = function(token) {
		$window.localStorage['job-token'] = token;
	};

	// Retrieve JWT from local storage
	var getToken = function() {
		return $window.localStorage['job-token'];
	};


	// Contact the server, authenticate user credentials
	var loginNewUser = function(user) {
		return $http({
			method : 'POST',
			url : 'api/auth/login',
			headers : {
                'Content-Type' : 'application/json'
              },
            data : user
		})
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
          id : payload.id,
          firstname : payload.firstname,
          lastname : payload.lastname,
          location : payload.location
        };
      }
    };


    // End Session for Current User
    var logout = function () {
        $window.localStorage.removeItem('job-token');
    };



    return {
      loginNewUser : loginNewUser,
      logout : logout,
      isLoggedIn : isLoggedIn,
      currentUser : currentUser,
      getToken : getToken,
      saveToken : saveToken
    }

})
