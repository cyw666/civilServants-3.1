'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmRankingGuide
 * @description
 * # tmRankingGuide
 */
angular.module('luZhouApp')
  .directive('tmRankingGuide', function () {
    return {
      templateUrl: 'components/tmRankingGuide.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
