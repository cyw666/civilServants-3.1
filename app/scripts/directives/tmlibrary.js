'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmLibrary
 * @description
 * # tmLibrary
 */
angular.module('luZhouApp')
  .directive('tmLibrary', function () {
    return {
      templateUrl: 'components/tmLibrary.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
