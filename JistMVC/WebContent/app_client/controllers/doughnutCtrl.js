// doughnutCtrl.js

var app = angular.module("ngJist")


app.config(['ChartJsProvider', function (ChartJsProvider) {

	
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#577D51','#336699', '#9c3025'],
      responsive: true
    });
}]);

app.controller("DoughnutCtrl", function ($scope, jobService) {
	$scope.jobs = [];
	$scope.labels = [];
	$scope.data = [];
	$scope.options = {};
	$scope.inProgress = [];
	$scope.Awaiting = [];
	$scope.NotOffered = [];

	
	
	jobService.getJobs()
	.then(function(response) {
			$scope.jobs = response.data; //keep for job.length
			
			response.data.forEach(function(val,index, array){
				if (response.data[index].offer==="InProgress") {
					$scope.inProgress.push(response.data[0].offer)
				}
				if (response.data[index].offer==="Awaiting") {
					$scope.Awaiting.push(response.data[0].offer)
				}
				if (response.data[index].offer==="NotOffered") {
					$scope.NotOffered.push(response.data[0].offer)
				}
			});
		})
	.then(function(){
		
      $scope.labels = ["Response Received", "Awaiting Reply", "Not Offered"];

	  $scope.data = [$scope.inProgress.length, $scope.Awaiting.length, $scope.NotOffered.length];

	  $scope.options = {
				  title: {
				    	  display: true,
				    	  text: "Tracked Jobs: " + $scope.jobs.length,
				    	  fontSize: 28,
				    	  fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
				    	  fontColor: "#ffffff"
				  },
				  legend: {
					  display: true,
					  position: 'left',
					  labels : {
						  fontColor: "#ffffff",
						  fontSize: 14
					  }
				  }
			  }
	})
	.catch(function(e){
		$scope.displayError = true;
	});
	

	
	 
});
	        