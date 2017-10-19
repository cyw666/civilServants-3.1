'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ShoppingcartCtrl
 * @description
 * # ShoppingcartCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('ShoppingcartCtrl', function ($scope, $location, $state,$rootScope, $cookieStore, commonService, $timeout, $loading) {
    //防伪造请求
    $scope.token = commonService.AntiForgeryToken();

    //购物车列表
    var totalCount;
    $scope.getShoppingCartList = function () {
      $loading.start('shoppingCart');
      commonService.getData(ALL_PORT.GetMyShoppingCart.url, 'POST',
        $.extend({}, ALL_PORT.GetMyShoppingCart.data))
        .then(function(response) {
          $loading.finish('shoppingCart');
          if(response.Type==1){
            $scope.shoppingCartData = response.Data;
            totalCount = response.Data.Count;
          }else {
            commonService.alertMs(response.Message);
          }
        });
    }
    $scope.getShoppingCartList();

    $scope.delCourseFromCart = function (courseid) {
      commonService.getData(ALL_PORT.DelCourseFromCart.url, 'POST',
        $.extend({}, ALL_PORT.DelCourseFromCart.data,{courseid:courseid}))
        .then(function(response) {
          if(response.Type==1){
            commonService.alertMs(response.Message);
            $scope.getShoppingCartList();
          }else {
            commonService.alertMs(response.Message);
          }
        });
    };

    //下单
    $scope.addOrder = function () {
      var addOrder = function () {
        if(totalCount>0){
          commonService.getData(ALL_PORT.AddOrder.url, 'POST',
            $.extend({}, ALL_PORT.AddOrder.data))
            .then(function(response) {
              if(response.Type==1){
                $state.go('orderdetaillist',{orderId:response.Data.OrderId});
              }else {
                commonService.alertMs(response.Message);
              }
            });
        }else {
          commonService.alertMs('购物车为空，请添加商品到购物车！')
        }
      };
      commonService.limitSubmit(addOrder);
    }
  });
