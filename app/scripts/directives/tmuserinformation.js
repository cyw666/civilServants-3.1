'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmUserInformation
 * @description
 * # tmUserInformation
 */
angular.module('luZhouApp')
  .directive('tmUserInformation', function () {
    return {
      templateUrl: 'components/tmUserInformation.html',
      restrict: 'EA',
      controller: function ($scope, $rootScope, commonService, $loading) {
        //退出
        $scope.out = commonService.loginOut;
        //请求用户信息
        $loading.start('loginOut');
        commonService.getData(ALL_PORT.LoginLong.url, 'POST', ALL_PORT.LoginLong.data).then(function (response) {
          $loading.finish('loginOut');
          $scope.info = response.Data;
        });
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
