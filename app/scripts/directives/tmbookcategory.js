'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmBookCategory
 * @description
 * # tmBookCategory
 */
angular.module('luZhouApp')
  .directive('tmBookCategory', function () {
    return {
      templateUrl: 'components/tmBookCategory.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
