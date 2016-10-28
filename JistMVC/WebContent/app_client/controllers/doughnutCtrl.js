// doughnutCtrl.js

var app = angular.module("ngJist")


app.config(['ChartJsProvider', function (ChartJsProvider) {

	
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#11aa00','#0439e8', '#e0021c'],
      responsive: true,
//      title: {
//    	  display: true,
//    	  text: "# of Tracked Jobs: 20",
//    	  fontSize: 26,
//    	  fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
//      }
    });
}]);

app.controller("DoughnutCtrl", function ($scope, jobService) {
	
	$scope.jobs = [];
	
	var total = 0;

	$scope.loadJobs = function() {
		jobService.getJobs().then(function(response) {
			total = response.data.length;
			console.log(response.data.length);
			$scope.jobs = response.data;
		});
	}
	
	$scope.loadJobs();
	
	console.log(total);
	
	
	$scope.totalCount = function() {
		return $scope.jobs.length;
	}
	
	console.log($scope.totalCount());


	
	  $scope.labels = ["In progress", "Awaiting Reply", "Job Not Offered"];
	  $scope.data = [5, 10, 5];
	  $scope.options = {
				  title: {
				    	  display: true,
				    	  text: "# of Tracked Jobs: " + total,
				    	  fontSize: 26,
				    	  fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
				  }
			  }
});
	        