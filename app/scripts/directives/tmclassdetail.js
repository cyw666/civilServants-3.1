'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassDetail
 * @description
 * # tmClassDetail
 */
angular.module('luZhouApp')
  .directive('tmClassDetail', function () {
    return {
      templateUrl: 'components/tmClassDetail.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
    
      }
    };
  });
