'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmNavBars
 * @description
 * # tmNavBars
 */
angular.module('luZhouApp')
    .directive('tmNavBars', function() {
        return {
          templateUrl: 'components/tmNavbars.html',
          restrict: 'EA',
          link: function postLink(scope, element, attrs) {
          }
        };
    });
