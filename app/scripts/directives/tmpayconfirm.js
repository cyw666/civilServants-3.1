'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPayConfirm
 * @description
 * # tmPayConfirm
 */
angular.module('luZhouApp')
  .directive('tmPayConfirm', function () {
    return {
      templateUrl: 'components/tmPayConfirm.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
