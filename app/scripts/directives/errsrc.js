'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:errSrc
 * @description
 * # errSrc
 */
angular.module('luZhouApp')
  .directive('errSrc', function () {
    return {
      link: function postLink(scope, element, attrs) {
        element.bind('error', function () {
          if (attrs.src != attrs.errSrc) {
            attrs.$set('src', attrs.errSrc);
          }
        });
      }
    }
  });
