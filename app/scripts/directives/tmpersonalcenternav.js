'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPersonalCenterNav
 * @description
 * # tmPersonalCenterNav
 */
angular.module('luZhouApp')
  .directive('tmPersonalCenterNav', function () {
    return {
      templateUrl: 'components/tmPersonalCenterNav.html',
      restrict: 'EA',
      scope:{
        navList:'='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
