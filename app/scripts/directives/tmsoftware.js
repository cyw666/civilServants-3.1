'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmSoftWare
 * @description
 * # tmSoftWare
 */
angular.module('luZhouApp')
  .directive('tmSoftWare', function () {
    return {
      templateUrl: 'components/tmSoftWare.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
