// jobRow.js

var app = angular.module('ngJist');

app.directive('jobDirective', function($compile, jobService){
	return {
		restrict: 'A',
		templateUrl: 'app_client/directives/jobRow/row.html',
	scope : {
		data : '=',
		'delete' : '=',
		edit : '='
	},
	link : function($scope, $element, $attr){
		$scope.jobCopy = {};
		var editJob = null;

		$scope.update = function(job) {
			if (editJob === null) {
				$scope.jobCopy = angular.copy(job);

					var $inputRow =
					`<form class = "row">
					<input type = "text" ng-model ="jobCopy.companyName" />
					<input type = "text" ng-model = "jobCopy.jobTitle" />
					<input type = "text" ng-model = "jobCopy.city" />
					<input type = "text" ng-model = "jobCopy.state" />
					<input type = "text" ng-model = "jobCopy.appDate" />
					<label for="jobStatus" class="sr-only">Job Status</label>
					<select size="1" ng-model="job.offer" name="jobStatus" id="jobStatus" class="form-control" placeholder="JobStatus">
					<option value = "In Progress"> In Progress </option>
					<option value = "Awaiting Reply"> Awaiting Reply </option>
					<option value = "Not Offered"> Not Offered </option>
					</select>
					<button class "btn btn-primary" ng-click="save(jobCopy)"> Save</button>
					<button ng-click="cancel()" >Cancel</button>
					<br><br><br>
					</form>`


					var compiledRow = $compile($inputRow) ($scope);
					editJob = compiledRow;
					$element.after(compiledRow);
			}
		}

		

		$scope.cancel = function() {
			if(editJob !=null) {
				editJob.remove(editJob);
				editJob =  null;
			}
		}

		$scope.save = function(job){
	          $scope.edit(job); // jobService.updateJob(job);
	          editJob.remove();
	          editJob = null;
	          $scope.jobCopy = {};
	        }
		}
	}
});
