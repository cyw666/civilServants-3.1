'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmMyCenter
 * @description
 * # tmMyCenter
 */
angular.module('luZhouApp')
  .directive('tmMyCenter', function () {
    return {
      templateUrl: 'components/tmMyCenter.html',
      restrict: 'EA',
      transclude: {
        'pagation':'tm-pagation'
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
