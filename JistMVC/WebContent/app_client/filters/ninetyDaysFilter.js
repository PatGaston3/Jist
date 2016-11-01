// FILTER FOR JOBS MORE THAN 90 DAYS OLD

var app = angular.module('ngJist');
app.filter('ninetyDaysFilter' , function() {
	return function(jobs) {
		var ninetyDaysArr = [];
		jobs.forEach(function(job) {

			var testDate = new Date(new Date(job.appDate).setTime(new Date(job.appDate).getTime() + (90*86400000)));
			var currentDate = new Date();	
				if (testDate <= currentDate){
					ninetyDaysArr.push(job);
				}
		});
		return ninetyDaysArr;
	}
});