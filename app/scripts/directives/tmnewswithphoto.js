'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmNewsWithPhoto
 * @description
 * # tmNewsWithPhoto
 */
angular.module('luZhouApp')
  .directive('tmNewsWithPhoto', function () {
    return {
      templateUrl: 'components/tmNewsWithPhoto.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
