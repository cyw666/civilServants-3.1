'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmApplyInvoice
 * @description
 * # tmApplyInvoice
 */
angular.module('luZhouApp')
  .directive('tmApplyInvoice', function () {
    return {
      templateUrl: 'components/tmApplyInvoice.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
