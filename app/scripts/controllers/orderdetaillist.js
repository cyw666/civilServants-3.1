'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:OrderdetaillistCtrl
 * @description
 * # OrderdetaillistCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('OrderdetaillistCtrl', function ($scope, $state,$location, $stateParams,$rootScope, $cookieStore, commonService, $timeout, $loading) {
    $scope.orderId = $stateParams.orderId;

    //获取订单详情
    $scope.getOrderDetailList = function () {
      $loading.start('orderDetailList');
      var params = $.extend({},ALL_PORT.GetOrderDetail.data,{orderId:$scope.orderId});
      commonService.getData(ALL_PORT.GetOrderDetail.url, 'POST', params)
        .then(function(response) {
          $loading.finish('orderDetailList');
          if(response.Type==1){
            $scope.orderDetailListData = response.Data;
          }else {
            commonService.alertMs(response.Message);
          }
        });
    };
    $scope.getOrderDetailList();
    //现金面付
    function payCash() {
      var params = $.extend({},ALL_PORT.InvoiceBeginPay.data,{orderId:$scope.orderId,payType:'payCash'});
      commonService.getData(ALL_PORT.InvoiceBeginPay.url, 'POST', params)
        .then(function(response) {
          if(response.Type==1){
            commonService.alertMs('下单成功！')
          }else {
            commonService.alertMs(response.Message);
          }
        });
    };

    $scope.payType='1';
    $scope.goPayConfirm = function (payType) {
      if(payType==1){
        $state.go('payconfirm',{orderId:$scope.orderId});
      }else if (payType==2){
        payCash();
      }else {
        commonService.alertMs('请选择支付方式！');
      }
    }
  });
