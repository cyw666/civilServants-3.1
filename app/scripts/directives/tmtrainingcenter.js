'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmTrainingCenter
 * @description
 * # tmTrainingCenter
 */
angular.module('luZhouApp')
  .directive('tmTrainingCenter', function () {
    return {
      templateUrl: 'components/tmTrainingCenter.html',
      restrict: 'EA',
      transclude: {
        'pagation':'tm-pagation'
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
