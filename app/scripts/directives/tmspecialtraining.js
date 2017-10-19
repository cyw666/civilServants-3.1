'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmSpecialTraining
 * @description
 * # tmSpecialTraining
 */
angular.module('luZhouApp')
  .directive('tmSpecialTraining', function () {
    return {
      templateUrl: 'components/tmSpecialTraining.html',
      restrict: 'EA',
      controller: function ($scope, commonService, $loading) {
        //专题学习
        $loading.start('specialTraining');
        commonService.getData(ALL_PORT.StudySpecial.url, 'POST',
          $.extend({},ALL_PORT.StudySpecial.data,{rows:3}) )
          .then(function(response) {
            $loading.finish('specialTraining');
            $scope.studySpecialData = response.Data;
            $scope.showNoSpecialClass = response.Data.ListData.length == 0?true:false;
          });
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
