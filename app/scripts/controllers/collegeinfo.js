'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:CollegeinfoCtrl
 * @description
 * # CollegeinfoCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('CollegeinfoCtrl', function ($scope, $http, commonService, $state, $loading) {
    $scope.vm={};
    $loading.start('collegeInfo');
    commonService.getData(ALL_PORT.CollegeInfo.url, 'POST', ALL_PORT.CollegeInfo.data)
    .then(function(response) {
      $loading.finish('collegeInfo');
      $scope.collegeInfoData = response.Data;
    });
  });
