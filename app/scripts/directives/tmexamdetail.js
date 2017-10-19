'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmExamDetail
 * @description
 * # tmExamDetail
 */
angular.module('luZhouApp')
  .directive('tmExamDetail', function () {
    return {
      templateUrl: 'components/tmExamDetail.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
