'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmBookDetail
 * @description
 * # tmBookDetail
 */
angular.module('luZhouApp')
  .directive('tmBookDetail', function () {
    return {
      templateUrl: 'components/tmBookDetail.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
