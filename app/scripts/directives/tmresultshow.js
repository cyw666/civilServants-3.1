'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmResultShow
 * @description
 * # tmResultShow
 */
angular.module('luZhouApp')
  .directive('tmResultShow', function () {
    return {
      templateUrl: 'components/tmResultShow.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
