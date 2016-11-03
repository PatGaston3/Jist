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

 					`<div class="container">
 					<form name="editJob" ng-action="save(jobCopy)" class="form-signin" novalidate>
 						<h2 class="form-signin-heading">Edit Job Posting</h2>
 						<hr>
 						<div class="row">
 							<div class="col-md-6">
 								<div class="add-job-subject-header">
 									Position Information
 								</div>

 								<label for="inputCompanyName" class="sr-only">Company Name</label>
 								<input ng-model="jobCopy.companyName" name="companyname" type="text" id="inputJob" class="form-control" placeholder="Company Name"
 									required autofocus ng-minlength="2" ng-maxlength="40">

 								<label for="inputJobTitle" class="sr-only">Job Title</label>
 								<input ng-model="jobCopy.jobTitle" name="jobtitle" type="text" id="inputJob" class="form-control" placeholder="Position Title"
 									required autofocus ng-minlength="2" ng-maxlength="40">

 								<label for="offeredSalary" class="sr-only">Application Date</label>
 								<input ng-model="jobCopy.offeredSalary" name="offeredSalary" type="number" id="inputJob" class="form-control" placeholder="Offered Salary"
 									required autofocus>

 								<label for="inputOffer" class="sr-only">Job Offer</label>
 								<select ng-model="jobCopy.offer" name="jobOffer" id="inputJob" class="form-control" required>
 								<option value="" disabled selected>Offer Status</option>
 								<option value="InProgress">In Progress</option>
 								<option value="Awaiting">Awaiting Reply</option>
 								<option value="NotOffered">No Offer</option>
 								</select>

 								<hr>
 								<div class="add-job-subject-header">
 									Position Notes
 								</div>
 							<div class="row">
 								<div class="col-md-4">
 									<label for="inputDesiredSalary" class="sr-only">Desired Salary</label>
 									<input ng-model="jobCopy.desiredSalary" name="jobDesiredSalary" type="number" id="inputDesiredSalary" class="form-control" placeholder="Your Desired Salary (ex: 75000)"
 										ng-maxlength="40" min="0" max="500000" step="500">
 								</div>
 								<div class="col-md-4">
 									<label for="inputSalaryType" class="sr-only">Wage Type</label>
 									<select ng-model="jobCopy.salType" name="jobSalType" id="inputJob" class="form-control">
 										<option value="" disabled selected hidden>Wage Type</option>
 										<option value="Year">Year</option>
 										<option value="Hour">Hour</option>
 										<option value="Contract">Contract</option>
 									</select>
 								</div>
 							</div>

 								<label for="inputNotes" class="sr-only">Input Notes</label>
 								<textarea rows="4" cols="40" form="addJob" ng-model="jobCopy.notes" name="jobNotes" id="inputJob" class="form-control" placeholder="Notes (How you heard about the position, people you know who work at the company, etc - max 250 characters)"
 									maxlength="250">
 								</textarea>
 								<br>

 							</div>

 							<div class="col-md-6">
 								<div class="add-job-subject-header">
 									Contact Information
 								</div>

 								<label for="inputContactFName" class="sr-only">Contact First Name</label>
 								<input ng-model="jobCopy.contactFname" name="jobContactFName" type="text" id="inputJob" class="form-control" placeholder="Contact First Name"
 									ng-maxlength="40">

 								<label for="inputContactLName" class="sr-only">Contact Last Name</label>
 								<input ng-model="jobCopy.contactLname" name="jobContactLName" type="text" id="inputJob" class="form-control" placeholder="Contact Last Name"
 									ng-maxlength="40">

 								<label for="inputContactPhone" class="sr-only">Contact Phone</label>
 								<input ng-model="jobCopy.contactPhone" name="jobContactPhone" type="text" id="inputJob" class="form-control" placeholder="Contact Phone #"
 									ng-maxlength="40">

 								<label for="inputContactEmail" class="sr-only">Contact Email</label>
 								<input ng-model="jobCopy.contactEmail" name="jobContactEmail" type="email" id="inputJob" class="form-control" placeholder="Contact Email"
 									ng-maxlength="40">


 										<div class="createJobBtns row">
 											<div class="col-sm-6">
 												<button ng-click="save(jobCopy)" class="btn btn-lg btn-primary btn-block" type="submit">Save Changes</button><br>
 											</div>
 											<div class="col-sm-6">
 												<button class="btn btn-lg btn-primary btn-block" ng-click="cancel()" >Cancel</button>
 											</div>
 								</div>
 							</div>
 						</div>
 					</form>

 				</div>`

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
