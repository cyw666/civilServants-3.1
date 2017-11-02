'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPrintCertificate
 * @description
 * # tmPrintCertificate
 */
angular.module('luZhouApp')
  .directive('tmPrintCertificate', function () {
    return {
      templateUrl: 'components/tmPrintCertificate.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        $('.startPrint').click(function () {
          $('.print').jqprint();
        })
      }
    };
  });
