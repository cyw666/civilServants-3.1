'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassGarden
 * @description
 * # tmClassGarden
 */
angular.module('luZhouApp')
  .directive('tmClassGarden', function () {
    return {
      templateUrl: 'components/tmClassGarden.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
