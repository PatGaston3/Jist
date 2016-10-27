// registrationService.js

app.factory('registrationService', function($http){

	  var registrationService = {};
	  
	  // CREATE NEW USER
	  registrationService.createUser = function(user) {
		  return $http({
			  method : 'POST',
			  url :'api/user',
			  headers : {
				    'Content-Type' : 'application/json'
				  },
			  data : user
		  })
	  }
		
	  return registrationService;
	});
