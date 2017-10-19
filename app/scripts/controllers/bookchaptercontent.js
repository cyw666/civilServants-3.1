'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:BookchaptercontentCtrl
 * @description
 * # BookchaptercontentCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('BookchaptercontentCtrl', function ($scope, $state, $rootScope, $cookieStore, commonService, $stateParams, $loading) {
    $scope.Id = $stateParams.Id;
    $scope.token = commonService.AntiForgeryToken();
    //获取图书章节
    $scope.getBookChapter = function (Id) {
      $loading.start('tmshowarticledetail');
      var params = $.extend({}, ALL_PORT.BookChapterContent.data, {Id:Id});
      commonService.getData(ALL_PORT.BookChapterContent.url,'POST',params)
        .then(function(response) {
          $loading.finish('tmshowarticledetail');
          $scope.articleData = response.Data;
          $scope.content = response.Data.Content;
          $scope.articleData.Type = 'BookChapter';
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
    }
    $scope.getBookChapter($scope.Id);

    $scope.favoriteAdd = function(options, token) {
      var params = $.extend({}, ALL_PORT.FavoriteAdd.data, options, token);
      commonService.getData(ALL_PORT.FavoriteAdd.url, 'POST', params)
        .then(function(response) {
          if (response.Type == 1) {
            commonService.alertMs(response.Message);
            $scope.getBookChapter($scope.Id);
          }else {
            commonService.alertMs(response.Message);
          }
        });
    };
    $scope.favoriteDelete = function(options, token) {
      var params = $.extend({}, ALL_PORT.FavoriteDelete.data, options, token)
      commonService.getData(ALL_PORT.FavoriteDelete.url, 'POST', params)
        .then(function(response) {
          if (response.Type == 1) {
            commonService.alertMs(response.Message);
            $scope.getBookChapter($scope.Id);
          }else {
            commonService.alertMs(response.Message);
          }
        });
    };
  
    //缩小字体
    $scope.reduceFont = function () {
      $scope.fontSize--;
      var fontSize;
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
