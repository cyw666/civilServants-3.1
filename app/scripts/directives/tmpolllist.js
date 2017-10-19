'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPollList
 * @description
 * # tmPollList
 */
angular.module('luZhouApp')
  .directive('tmPollList', function () {
    return {
      templateUrl: 'components/tmPollList.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
