'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmCourseDetails
 * @description
 * # tmCourseDetails
 */
angular.module('luZhouApp')
  .directive('tmCourseDetails', function () {
    return {
      templateUrl: 'components/tmCourseDetails.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
