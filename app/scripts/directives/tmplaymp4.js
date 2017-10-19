'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPlayMp4
 * @description
 * # tmPlayMp4
 */
angular.module('luZhouApp')
  .directive('tmPlayMp4', function () {
    return {
      templateUrl: 'components/tmPlayMp4.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
