'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmUserRankingList
 * @description
 * # tmUserRankingList
 */
angular.module('luZhouApp')
  .directive('tmUserRankingList', function () {
    return {
      templateUrl: 'components/tmUserRankingList.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
