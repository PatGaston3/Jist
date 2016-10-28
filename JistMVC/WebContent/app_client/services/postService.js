var app = angular.module('ngJist');

app.factory('postService', function() {
	var totalJobs = 0;
	
	function setTotalJobs (data){
		totalJobs = data;
	}
	
	function getTotalJobs(){
		return totalJobs;
	}
	
	return {
		setTotalJobs : setTotalJobs, 
		getTotalJobs: getTotalJobs
	}
});