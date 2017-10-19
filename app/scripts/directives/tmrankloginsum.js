'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmRankLoginSum
 * @description
 * # tmRankLoginSum
 */
angular.module('luZhouApp')
  .directive('tmRankLoginSum', function () {
    return {
      templateUrl: 'components/tmRankLoginSum.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
