// jobRow.js

var app = angular.module('ngJist');

app.directive('jobDirective', function($compile, jobService){
	return {
		restrict: 'A',
		template: `
	<div class="container">
	<div class="row">
	<div class="col-md-2">
	{{data.companyName}}
	</div>
	<div class="col-md-2">
	{{data.jobTitle}}
	</div>
	<div class="col-md-2">
	{{data.city}}, {{data.state}}
	</div>
	<div class="col-md-2">
	{{data.appDate}}
	</div>
	<div class="col-md-2">
	<button class="btn btn-primary btn-xs" ng-click="update(data)">Edit <i class="fa fa-pencil" aria-hidden="true"></i></button>
	</div>
	<div class="col-md-2">
	<button type="button" ng-click="delete(data)" class="btn btn-danger btn-xs">Delete <i class="fa fa-trash" aria-hidden="true"></i></button>
	</div>
	</div>
	</div>
	`,
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
					// `<div class="row">
					// <div class="col-md-2>
					// <input type="text"  ng-model="jobCopy.companyName" />
					// </div>
					// <div class="col-md-2>
					// <input type="text"  ng-model="jobCopy.jobTitle" />
					// </div>
					// <div class="col-md-2>
					// <input type="text"  ng-model="jobCopy.jobCity" />
					// </div>
					// <div class="col-md-2>
					// <input type="text"  ng-model="jobCopy.appDate" />
					// </div>
					// <div class="col-md-2>
					// <button class="btn btn-primary" ng-click="save(jobCopy)" >Save</button>
					// </div>
					// <div class="col-md-2>
					// <button class="btn btn-primary" ng-click="cancel()" >Cancel</button>
					// </div>`
					`<table class="table">
						<tr>
						<td>
						<input type="text" class="form-control" ng-model="jobCopy.companyName" />
						</td>
						<td>
						<input type="text" class="form-control" ng-model="jobCopy.jobTitle" />
						</td>
						<td>
						<input type="text" class="form-control" ng-model="jobCopy.city" />
						</td>
						<td>
						<input type="text" class="form-control" ng-model="jobCopy.state" />
						</td>
						<td>
						<input type="text" class="form-control" ng-model="jobCopy.appDate" />
						</td>
						<td>
						<button ng-click="save(jobCopy)" >Save</button>
						</td>
						<td>
						<button ng-click="cancel()" >Cancel</button>
						</td>
						</tr>
						</table>`

					var compiledRow = $compile($inputRow) ($scope);
					editJob = compiledRow;
					$element.after(compiledRow);
			}
		}


		$scope.cancel = function() {
			if(editJob !=null) {
				editJob.deleteJob(editJob);
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
