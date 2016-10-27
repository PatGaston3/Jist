// registrationService.js

app.factory('registrationService', function($http){

	  var registrationService = {};
	  
	  // CREATE NEW USER
	  registrationService.createUser = function(user) {
		  return $http({
			  method : 'POST',
			  url :'api/auth/signup',
			  headers : {
				    'Content-Type' : 'application/json'
				  },
			  data : user
		  })
		  .then(function(res){
			  return res;
		  })
		  .catch(function(err){
			  console.log(err);
		  })
	  }
	  return registrationService;
	});
