'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPoll
 * @description
 * # tmPoll
 */
angular.module('luZhouApp')
  .directive('tmPoll', function () {
    return {
      templateUrl: 'components/tmPoll.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
