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
 								<textarea rows="4" cols="40" form="addJob" ng-model="jobCopy.notes" name="jobNotes" id="inputJob" class="form-control" placeholder="Notes"
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


 									<div class="col-xs-4 col-centered">
 								<div class="row row-centered">
 										<div class="createJobBtns">
 											<button ng-click="save(jobCopy)" class="btn btn-lg btn-primary btn-block" type="submit">Save Changes</button><br>
 											<button class="btn btn-lg btn-primary btn-block" ng-click="cancel()" >Cancel</button>
 										</div>
 									</div>
 								</div>
 							</div>
 						</div>
 					</form>

 				</div>`











//
// 					`<form class = "row">
// 					Company Name: <input type = "text" ng-model ="jobCopy.companyName" />
// 					Position: <input type = "text" ng-model = "jobCopy.jobTitle" />
// 					City: <input type = "text" ng-model = "jobCopy.city" />
// 					Contact First Name: <input type = "text" ng-model = "jobCopy.contactFname" />
//					Contact Last Name: <input type = "text" ng-model = "jobCopy.contactLname" />
//					Contact Phone: <input type = "text" ng-model = "jobCopy.contactPhone" />
//					Contact Email: <input type = "text" ng-model = "jobCopy.contactEmail" />
// 					Application Date: <input type = "text" ng-model = "jobCopy.appDate" />
//					Posting Url: <input type = "text" ng-model = "jobCopy.postingUrl" />
//					Desired Salary: <input type = "text" ng-model = "jobCopy.desiredSalary" />
//					Posting Url: <input type = "text" ng-model = "jobCopy.postingUrl" />
// 					Job Status: <label for="jobStatus" ></label>
// 					<select size="1" ng-model="job.offer" name="jobStatus" class="col-md-1" id="jobStatus" placeholder="JobStatus">
// 					<option value = "In Progress"> In Progress </option>
// 					<option value = "Awaiting Reply"> Awaiting Reply </option>
// 					<option value = "Not Offered"> Not Offered </option>
//					Notes: <input type = "text" ng-model = "jobCopy.notes" />
// 					</select>
// 					<button class "btn btn-primary" ng-click="save(jobCopy)"> Save </button>
// 					<button ng-click="cancel()" > Cancel </button>
// 					<br><br><br>
// 					</form>`


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
							console.log(job.appDate);
		          $scope.edit(job);
							console.log(job.appDate);
		          editJob.remove();
							console.log(job.appDate);
		          editJob = null;
		          $scope.jobCopy = {};
							console.log(job.appDate);
		        }
			}

	  }
  });
