'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmStudentStyleDetail
 * @description
 * # tmStudentStyleDetail
 */
angular.module('luZhouApp')
  .directive('tmStudentStyleDetail', function () {
    return {
      templateUrl: 'components/tmStudentStyleDetail.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
