'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmSpecialBanner
 * @description
 * # tmSpecialBanner
 */
angular.module('luZhouApp')
  .directive('tmSpecialBanner', function () {
    return {
      templateUrl: 'components/tmSpecialBanner.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
