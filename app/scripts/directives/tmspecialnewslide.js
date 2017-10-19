'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmSpecialNewSlide
 * @description
 * # tmSpecialNewSlide
 */
angular.module('luZhouApp')
  .directive('tmSpecialNewSlide', function () {
    return {
      templateUrl: 'components/tmSpecialNewSlide.html',
      restrict: 'EA',
      scope:{
        slideData:'=',
        startSlide:'='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
