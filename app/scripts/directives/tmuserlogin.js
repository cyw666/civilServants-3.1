'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmUserLogin
 * @description
 * # tmUserLogin
 */
angular.module('luZhouApp')
  .directive('tmUserLogin', function () {
    return {
      templateUrl: 'components/tmUserLogin.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
