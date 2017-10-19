'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmTip
 * @description
 * # tmTip
 */
angular.module('luZhouApp')
  .directive('tmTip', function () {
    return {
      templateUrl: 'components/tmTip.html',
      restrict: 'A',
      controller: function ($scope, commonService, $loading) {
        //未读通知小提示
        $scope.showTip = false;
        commonService.getData(ALL_PORT.UnReadNotice2.url, 'POST', $.extend({}, ALL_PORT.UnReadNotice2.data))
          .then(function(response) {
            $scope.unReadNoticeList = response.Data;
            if (response.Data.length > 0) {
              $scope.showTip = true;
            }
          });
        //关闭小提示
        $scope.closeTip = function() {
          $scope.showTip = false;
        };
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
