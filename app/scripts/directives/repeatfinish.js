'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:repeatFinish
 * @description
 * # repeatFinish
 */
angular.module('luZhouApp')
  .directive('repeatFinish', function () {
    return {
      link: function (scope, element, attr) {
        if (scope.$last == true) {
          scope.$eval(attr.repeatFinish)
        }
      }
    };
  });
