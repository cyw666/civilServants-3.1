'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmTestStat
 * @description
 * # tmTestStat
 */
angular.module('luZhouApp')
  .directive('tmTestStat', function () {
    return {
      templateUrl: 'components/tmTestStat.html',
      restrict: 'EA',
      transclude: {
        'pagation':'tm-pagation'
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
