'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmAcademicForum
 * @description
 * # tmAcademicForum
 */
angular.module('luZhouApp')
  .directive('tmAcademicForum', function () {
    return {
      templateUrl: 'components/tmAcademicForum.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
