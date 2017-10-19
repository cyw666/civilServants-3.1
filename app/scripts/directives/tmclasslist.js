'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassList
 * @description
 * # tmClassList
 */
angular.module('luZhouApp')
  .directive('tmClassList', function () {
    return {
      templateUrl: 'components/tmClassList.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
