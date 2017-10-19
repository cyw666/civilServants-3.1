'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmRankCourseFinish
 * @description
 * # tmRankCourseFinish
 */
angular.module('luZhouApp')
  .directive('tmRankCourseFinish', function () {
    return {
      templateUrl: 'components/tmRankCourseFinish.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
