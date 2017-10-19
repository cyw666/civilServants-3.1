'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPersonalArchives
 * @description
 * # tmPersonalArchives
 */
angular.module('luZhouApp')
  .directive('tmPersonalArchives', function () {
    return {
      templateUrl: 'components/tmPersonalArchives.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
