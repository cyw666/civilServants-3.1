'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmSpecialImg
 * @description
 * # tmSpecialImg
 */
angular.module('luZhouApp')
  .directive('tmSpecialImg', function () {
    return {
      templateUrl: 'components/tmSpecialImg.html',
      restrict: 'EA',
      scope:{
        studySpecialData:'=',
        repeatFinish:'=',
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
