'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmStudentsHourRanking
 * @description
 * # tmStudentsHourRanking
 */
angular.module('luZhouApp')
  .directive('tmStudentsHourRanking', function () {
    return {
      templateUrl: 'components/tmStudentsHourRanking.html',
      restrict: 'EA',
      controller: function ($scope, commonService, $loading) {
        //学院学时排行
        $loading.start('studentsHourRanking');
        commonService.getData(ALL_PORT.LeftUserRank.url, 'POST',
          ALL_PORT.LeftUserRank.data)
          .then(function (response) {
            $loading.finish('studentsHourRanking');
            $scope.studentHourRanking = response.Data;
          });
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
