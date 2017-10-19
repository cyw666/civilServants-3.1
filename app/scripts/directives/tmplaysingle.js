'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPlaySingle
 * @description
 * # tmPlaySingle
 */
angular.module('luZhouApp')
  .directive('tmPlaySingle', function () {
    return {
      templateUrl: 'components/tmPlaySingle.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
