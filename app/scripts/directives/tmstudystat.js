'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmStudyStat
 * @description
 * # tmStudyStat
 */
angular.module('luZhouApp')
  .directive('tmStudyStat', function () {
    return {
      templateUrl: 'components/tmStudyStat.html',
      restrict: 'EA',
      transclude: {
        'pagation':'tm-pagation'
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
