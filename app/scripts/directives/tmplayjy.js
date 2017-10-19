'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPlayJy
 * @description
 * # tmPlayJy
 */
angular.module('luZhouApp')
  .directive('tmPlayJy', function () {
    return {
      templateUrl: 'components/tmPlayJy.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
