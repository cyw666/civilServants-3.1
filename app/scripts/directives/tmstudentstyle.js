'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmStudentStyle
 * @description
 * # tmStudentStyle
 */
angular.module('luZhouApp')
  .directive('tmStudentStyle', function () {
    return {
      templateUrl: 'components/tmStudentStyle.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
