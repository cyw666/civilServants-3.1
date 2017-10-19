'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPlayScorm
 * @description
 * # tmPlayScorm
 */
angular.module('luZhouApp')
  .directive('tmPlayScorm', function () {
    return {
      templateUrl: 'components/tmPlayScorm.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
