'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmLogin
 * @description
 * # tmLogin
 */
angular.module('luZhouApp')
  .directive('tmLogin', function () {
    return {
      templateUrl: 'components/tmLogin.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
