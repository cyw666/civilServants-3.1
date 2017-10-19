'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:NoticedetailCtrl
 * @description
 * # noticeDetailCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('noticeDetailCtrl', function($scope, commonService, $stateParams, $loading) {


        $scope.location = '通知内容';
        $scope.isNotice = true;
        $scope.Id = $stateParams.ID;
        $loading.start('tmshowarticledetail');

        commonService.getData(ALL_PORT.noticeContent.url, 'POST',
                $.extend({}, ALL_PORT.noticeContent.data, { Id: $scope.Id }))
            .then(function(response) {
                $loading.finish('tmshowarticledetail');
                $scope.articleData = response.Data.Model;
                $scope.articleData.Type = 'Notice';
                $scope.content = response.Data.Model.Content;
                var str = $scope.content.split('font-size:');
                var reg = /^(?=.*\d.*\b)/;
                for (var i = 0; i < str.length; i++) {
                    if (reg.test(str[i].split(';')[0])) {
                        $scope.fontSize = parseInt(str[i].split(';')[0]);
                    }
                }
                if(!$scope.fontSize){
                    $scope.fontSize = 14;
                }
            });

        //收藏
        $scope.favoriteAdd = function(options, token) {
          debugger
            var params = $.extend({}, ALL_PORT.FavoriteAdd.data, options, token)
            commonService.getData(ALL_PORT.FavoriteAdd.url, 'POST',
                    params)
                .then(function(response) {
                    if (response.Type == 1) {
                        $scope.articleData.FavoriteId = response.Value;
                        commonService.alertMs(response.Message);
                    }
                });
        };

        //取消收藏
        $scope.favoriteDelete = function(options, token) {
            var params = $.extend({}, ALL_PORT.FavoriteDelete.data, options, token)
            commonService.getData(ALL_PORT.FavoriteDelete.url, 'POST',
                    params)
                .then(function(response) {
                    if (response.Type == 1) {
                        $scope.articleData.FavoriteId = 0;
                        commonService.alertMs(response.Message);
                    }
                });
        };
  
      //缩小字体
      $scope.reduceFont = function () {
        $scope.fontSize--;
        if ($scope.fontSize < 12) {
          $scope.fontSize = 12;
        }
        angular.element('#setFont').find("span").css("fontSize", $scope.fontSize + "pt");
        angular.element('#setFont').find("p").css("fontSize", $scope.fontSize + "px");
      };
      //放大字体
      $scope.increaseFont = function () {
        $scope.fontSize++;
        angular.element('#setFont').find("span").css("fontSize", $scope.fontSize + "pt");
        angular.element('#setFont').find("p").css("fontSize", $scope.fontSize + "px");
      };

    });
