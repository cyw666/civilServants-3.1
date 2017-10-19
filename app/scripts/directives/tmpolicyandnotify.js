'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmpolicyandnotify
 * @description
 * # tmPolicyAndNotify
 */
angular.module('luZhouApp')
  .directive('tmPolicyAndNotify', function ($compile,$location) {
    return {
      templateUrl: 'components/tmPolicyAndNotify.html',
      restrict: 'EA',
      scope:{
          myNewsData:'=myData',
          title:'=myTitle'
      },
      link: function (scope, element, attrs) {

      }
    };
  });
