'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmTrainingCourseClassify
 * @description
 * # tmTrainingCourseClassify
 */
angular.module('luZhouApp')
  .directive('tmTrainingCourseClassify', function () {
    return {
      templateUrl: 'components/tmTrainingCourseClassify.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
