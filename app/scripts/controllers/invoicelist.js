'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:InvoicelistCtrl
 * @description
 * # InvoicelistCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('InvoicelistCtrl', function ($scope, $stateParams, $state, commonService, $loading) {
    //发票列表
    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: 4},{totalItems:20});
    $scope.getOrderList = function (options) {
      $loading.start('invoiceList');
      var parmas = $.extend({},ALL_PORT.GetMyOrder.data,options);
      commonService.getData(ALL_PORT.GetMyOrder.url, 'POST', parmas)
        .then(function(response) {
          $loading.finish('invoiceList');
          /*$scope.orderListData = response.Data;
           $scope.paginationConf.totalItems = response.Data.Count;*/
        });
    };

    $scope.$watch('paginationConf.currentPage', function() {
      var pageOptions = {
        page: $scope.paginationConf.currentPage,
      };
      $scope.getOrderList(pageOptions);
    });
  });
