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
	$scope.jobs.offer = [];
	$scope.inProgess = [];
	$scope.Awaiting = [];
	$scope.NotOffered = [];
	
	jobService.displayJobOffer()
	.then(function(response){
		console.log(response)
		console.log(response.data)
	})
	
	jobService.getJobs()
	.then(function(response) {
			console.log("Added jobs to $scope array");
			$scope.jobs = response.data;
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
	        