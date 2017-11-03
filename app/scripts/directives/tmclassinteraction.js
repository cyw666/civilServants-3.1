'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassInteraction
 * @description
 * # tmClassInteraction
 */
angular.module('luZhouApp')
  .directive('tmClassInteraction', function () {
    return {
      templateUrl: 'components/tmClassInteraction.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
