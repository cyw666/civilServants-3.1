'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmShoppingCart
 * @description
 * # tmShoppingCart
 */
angular.module('luZhouApp')
  .directive('tmShoppingCart', function () {
    return {
      templateUrl: 'components/tmShoppingCart.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
