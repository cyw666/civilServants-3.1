'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmInvoiceList
 * @description
 * # tmInvoiceList
 */
angular.module('luZhouApp')
  .directive('tmInvoiceList', function () {
    return {
      templateUrl: 'components/tmInvoiceList.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
