// FILTER FOR JOBS AWAITING REPLY FOR MORE THAN 7 DAYS

var app = angular.module('ngJist');
app.filter('inactiveFilter' , function() {
	return function(jobs) {
		var inactiveArr = [];
		
		jobs.forEach(function(job) {
			var testDate = new Date(new Date(job.appDate).setTime(new Date(job.appDate).getTime() + (7*86400000)));
			var currentDate = new Date();
			
			if (job.offer === "Awaiting") {	
				if (testDate <= currentDate){
					inactiveArr.push(job);
				}
			}
		});
		return inactiveArr;
	}
});