'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPublish
 * @description
 * # tmPublish
 */
angular.module('luZhouApp')
  .directive('tmPublish', function () {
    return {
      templateUrl: 'components/tmPublish.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
