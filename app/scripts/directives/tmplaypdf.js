'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPlayPdf
 * @description
 * # tmPlayPdf
 */
angular.module('luZhouApp')
  .directive('tmPlayPdf', function () {
    return {
      templateUrl: 'components/tmPlayPdf.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        // scope.playPdf();
      }
    };
  })
;
