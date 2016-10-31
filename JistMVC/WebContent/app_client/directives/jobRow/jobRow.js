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
<<<<<<< HEAD
 					Company Name: <input type = "text" ng-model ="jobCopy.companyName" />
 					Position: <input type = "text" ng-model = "jobCopy.jobTitle" />
 					City: <input type = "text" ng-model = "jobCopy.city" />
 					Contact First Name: <input type = "text" ng-model = "jobCopy.contactFname" />
					Contact Last Name: <input type = "text" ng-model = "jobCopy.contactLname" />
					Contact Phone: <input type = "text" ng-model = "jobCopy.contactPhone" />
					Contact Email: <input type = "text" ng-model = "jobCopy.contactEmail" />
 					Application Date: <input type = "text" ng-model = "jobCopy.appDate" />
					Posting Url: <input type = "text" ng-model = "jobCopy.postingUrl" />
					Desired Salary: <input type = "text" ng-model = "jobCopy.desiredSalary" />
					Posting Url: <input type = "text" ng-model = "jobCopy.postingUrl" />
 					Job Status: <label for="jobStatus" ></label>
 					<select size="1" ng-model="job.offer" name="jobStatus" class="col-md-1" id="jobStatus" placeholder="JobStatus">
 					<option value = "In Progress"> In Progress </option>
 					<option value = "Awaiting Reply"> Awaiting Reply </option>
 					<option value = "Not Offered"> Not Offered </option>
					Notes: <input type = "text" ng-model = "jobCopy.notes" />
 					</select>
 					<button class "btn btn-primary" ng-click="save(jobCopy)"> Save </button>
 					<button ng-click="cancel()" > Cancel </button>
=======
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
>>>>>>> cf7acb16af2519a1bef2aaed087b30e31a1b63c1
 					<br><br><br>
 					</form>`



//		$scope.update = function(job) {
//			if (editJob === null) {
//				$scope.jobCopy = angular.copy(job);
//
//					var $inputRow =
//						`<div class="container">
//							<form>
//								<div class ="row">
//									<div class="col-md-2">
//										<input type = "text" placeholder="Company Name" value={{data.companyName}}>
//									</div>
//									<div class="col-md-2">
//										<input type = "text" placeholder="Job Title" value={{data.jobTitle}}>
//									</div>
//									<div class="col-md-2">
//										<input type = "text" placeholder="Job City" value={{data.city}}>
//									</div>
//									<div class="col-md-2">
//										<input type = "text" placeholder="Job State" value={{data.state}}>
//									</div>
//									<div class="col-md-2">
//										<input type = "text" placeholder="Application Date" value={{data.appDate}}>
//									</div>
//								</div>
//
//								<div class="row">
//								<div class="col-md-2">
//									<input type = "text" placeholder="Contact Email" value={{data.contactEmail}}>
//								</div>
//									<div class="col-md-2">
//										<input type = "text" placeholder="Contact First Name" value={{data.contactFname}}>
//									</div>
//									<div class="col-md-2">
//										<input type = "text" placeholder="Contact Last Name" value={{data.contactLname}}>
//									</div>
//									<div class="col-md-2">
//										<input type = "text" placeholder="Contact Phone" value={{data.contactPhone}}>
//									</div>
//									<div class="col-md-2">
//										<input type = "text" placeholder="Posting URL" value={{data.postingUrl}}>
//									</div>
//								</div>
//
//								<div class="row">
//								<div class="col-md-2">
//									<input type = "text" placeholder="Salary Type" value={{data.salType}}>
//								</div>
//								<div class="col-md-2">
//									<input type = "text" placeholder="Start Date" value={{data.startDate}}>
//								</div>
//									<div class="col-md-2">
//										<label for="jobStatus" class="sr-only">Job Status</label>
//											<select ng-model="job.offer" name="jobStatus" id="jobStatus" placeholder="JobStatus">
//												<option value = "In Progress"> In Progress </option>
//												<option value = "Awaiting Reply"> Awaiting Reply </option>
//												<option value = "Not Offered"> Not Offered </option>
//											</select>
//									</div>
//								<div class="col-md-2">
//									<button class = "btn btn-primary btn-xs" ng-click="save(jobCopy)"> Save</button>
//								</div>
//								<div class="col-md-2">
//									<button class = "btn btn-primary btn-xs" ng-click="cancel()" >Cancel</button>
//								</div>
//									<br><br><br>
//								</div>
//							</form>
//						</div>`

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
		          $scope.edit(job);
		          editJob.remove();
		          editJob = null;
		          $scope.jobCopy = {};
		        }
			}

	  }
  });
