'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmOrderList
 * @description
 * # tmOrderList
 */
angular.module('luZhouApp')
  .directive('tmOrderList', function () {
    return {
      templateUrl: 'components/tmOrderList.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
