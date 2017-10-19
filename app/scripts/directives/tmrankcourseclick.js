'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmRankCourseClick
 * @description
 * # tmRankCourseClick
 */
angular.module('luZhouApp')
  .directive('tmRankCourseClick', function () {
    return {
      templateUrl: 'components/tmRankCourseClick.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
