'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmRelatedCourse
 * @description
 * # tmRelatedCourse
 */
angular.module('luZhouApp')
  .directive('tmRelatedCourse', function () {
    return {
      templateUrl: 'components/tmRelatedCourse.html',
      restrict: 'EA',
      scope:{
        relatedCourseData:'='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
