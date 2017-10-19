'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmSpecialLearning
 * @description
 * # tmSpecialLearning
 */
angular.module('luZhouApp')
  .directive('tmSpecialLearning', function () {
    return {
      templateUrl: 'components/tmSpecialLearning.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
