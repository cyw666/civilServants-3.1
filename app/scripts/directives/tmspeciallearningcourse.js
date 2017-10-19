'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmSpecialLearningCourse
 * @description
 * # tmSpecialLearningCourse
 */
angular.module('luZhouApp')
  .directive('tmSpecialLearningCourse', function () {
    return {
      templateUrl: 'components/tmSpecialLearningCourse.html',
      restrict: 'EA',
      scope:{
        specialCourseData:'='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
