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
	Edit Button
	</div>
	<div class="col-md-2">
	Delete Button
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
					'<div class="row">' +
					'<div class="col-md-2>' +
					'<input type="text"  ng-model="jobCopy.companyName" />' +
					'<div class="col-md-2>' +
					'<input type="text"  ng-model="jobCopy.jobTitle" />' +
					'<div class="col-md-2>' +
					'<input type="text"  ng-model="jobCopy.jobCity" />' +
					'<div class="col-md-2>' +
					'<input type="text"  ng-model="jobCopy.appDate" />' +
					'<div class="col-md-2>' +
					'<button class="btn btn-primary" >Save</button>'
					
					var compiledRow = $compile($inputRow) ($scope);
					editJob = compiledRow;
					$element.after(compiledRow);
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