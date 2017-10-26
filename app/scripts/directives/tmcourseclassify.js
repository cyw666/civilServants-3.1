'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmCourseClassify
 * @description
 * # tmCourseClassify
 */
angular.module('luZhouApp')
  .directive('tmCourseClassify', function () {
    return {
      templateUrl: 'components/tmcourseclassify.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
