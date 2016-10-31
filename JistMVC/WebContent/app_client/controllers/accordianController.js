 var app = angular.module('ngJist');

 app.controller('accordionController', function($scope, jobService, $location, authenticationService) {


     // initiate an array to hold all active tabs
     $scope.activeTabs = [];

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
 })
