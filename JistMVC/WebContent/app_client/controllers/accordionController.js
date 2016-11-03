var app = angular.module('ngJist');

app.controller('accordionController', function($filter, $scope, jobService, $location, authenticationService) {
	

    // initiate an array to hold all active tabs
    $scope.activeTabs = [];
    
    $scope.groups = [];

    // check if the tab is active
    $scope.isOpenTab = function (tab) {
        // check if this tab is already in the activeTabs array
        if ($scope.activeTabs.indexOf(tab) > -1) {
            // if so, return true
            return true;
        } else {
            // if not, return false
            return false;
        }
    }

    // function to 'open' a tab
    $scope.openTab = function (tab) {
        // check if tab is already open
        if ($scope.isOpenTab(tab)) {
            //if it is, remove it from the activeTabs array
            $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
        } else {
            // if it's not, add it!
            $scope.activeTabs.push(tab);
        }
    }
    
    // Accordion functionality on home view
    
    $scope.oneAtATime = true;
    
    $scope.inactiveNotifications = [];
    $scope.ninetyDaysNotifications = [];
                  
    jobService.getJobs().then(function(response) {
    	createNotifications(response.data);
    });
    
    var createNotifications = function(jobs) {
    	$scope.inactiveNotifications = $filter('inactiveFilter')(jobs);
    	$scope.ninetyDaysNotifications = $filter('ninetyDaysFilter')(jobs);
    	jobService.setTotalAlerts($scope.inactiveNotifications.length, $scope.ninetyDaysNotifications.length);
    };
    
    
    $scope.status = {
    	    isCustomHeaderOpen: false,
    	    isFirstOpen: true,
    	    isFirstDisabled: false
    	  };
    
});