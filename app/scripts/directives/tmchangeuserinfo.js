'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmchangeuserinfo
 * @description
 * # tmChangeUserInfo
 */
angular.module('luZhouApp')
  .directive('tmChangeUserInfo', function () {
    return {
      templateUrl: 'components/tmChangeUserInfo.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
