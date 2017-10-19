'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:OrderconfirmCtrl
 * @description
 * # OrderconfirmCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('OrderconfirmCtrl', function ($scope, $stateParams, commonService, $loading) {
    //防伪造请求
    $scope.token = commonService.AntiForgeryToken();

    $scope.invoiceId = $stateParams.invoiceId;

    $scope.getInvoice = function () {
      $loading.start('orderConfirm');
      commonService.getData(ALL_PORT.GetInvoice.url, 'POST', {invoiceId:$scope.invoiceId})
        .then(function(response) {
          $loading.finish('orderConfirm');
          if(response.Type==1){
            $scope.invoiceData = response.Data;
          }else {
            commonService.alertMs(response.Message);
          }
        });
    };
    $scope.getInvoice();

    $scope.getConfirmPay = function () {
      commonService.getData(ALL_PORT.PayForInvoice.url, 'POST', {invoiceId:$scope.invoiceId})
        .then(function(response) {
          if(response.Type==1){
            $scope.payContent = response.Data;
          }else {
            commonService.alertMs(response.Message);
          }
        });
    };
  });
