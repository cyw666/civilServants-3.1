'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmOrderConfirm
 * @description
 * # tmOrderConfirm
 */
angular.module('luZhouApp')
  .directive('tmOrderConfirm', function () {
    return {
      templateUrl: 'components/tmOrderConfirm.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
