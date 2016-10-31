// doughnutCtrl.js

var app = angular.module("ngJist")


app.config(['ChartJsProvider', function (ChartJsProvider) {

	
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#11aa00','#0439e8', '#e0021c'],
      responsive: true
    });
}]);

app.controller("DoughnutCtrl", function ($scope, jobService) {
	$scope.jobs = [];
	$scope.labels = [];
	$scope.data = [];
	$scope.options = {};
	$scope.inProgess = {};
	$scope.Awaiting = {};
	$scope.NotOffered = {};
	
	
	
	jobService.getJobs()
	.then(function(response) {
			
			$scope.jobs = response.data;
			console.log(response.data[0].offer)
			if(response.data[0].offer == "inProgress") {
				
			}
		})
	.then(function(){
      $scope.labels = ["In progress", "Awaiting Reply", "Not Offered"];
      
	  $scope.data = [5, 10, 5]; // [$scope.inProgress, $scope.Awaiting, $scope.NotOffered];
	  $scope.options = {
				  title: {
				    	  display: true,
				    	  text: "# of Tracked Jobs: " + $scope.jobs.length,
				    	  fontSize: 26,
				    	  fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
				  }
			  }
	})
	.catch(function(e){
		$scope.displayError = true;
	});
	

	
	 
});
	        