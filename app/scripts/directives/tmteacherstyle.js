'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmTeacherStyle
 * @description
 * # tmTeacherStyle
 */
angular.module('luZhouApp')
  .directive('tmTeacherStyle', function () {
    return {
      templateUrl: 'components/tmTeacherStyle.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
    
      }
    };
  });
