'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmCollegeInfo
 * @description
 * # tmCollegeInfo
 */
angular.module('luZhouApp')
  .directive('tmCollegeInfo', function () {
    return {
      templateUrl: 'components/tmCollegeInfo.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
