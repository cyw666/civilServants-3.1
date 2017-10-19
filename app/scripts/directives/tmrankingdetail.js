'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmRankingDetail
 * @description
 * # tmRankingDetail
 */
angular.module('luZhouApp')
  .directive('tmRankingDetail', function () {
    return {
      templateUrl: 'components/tmRankingDetail.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
