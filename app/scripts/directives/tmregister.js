'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmRegister
 * @description
 * # tmRegister
 */
angular.module('luZhouApp')
  .directive('tmRegister', function ($state) {
    return {
      templateUrl: 'components/tmRegister.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        //协议
        $('#myModal').modal({
          show:true,
          backdrop: 'static',
          keyboard: false
        });
      }
    };
  });
