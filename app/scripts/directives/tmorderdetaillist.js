'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmOrderDetailList
 * @description
 * # tmOrderDetailList
 */
angular.module('luZhouApp')
  .directive('tmOrderDetailList', function () {
    return {
      templateUrl: 'components/tmOrderDetailList.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
