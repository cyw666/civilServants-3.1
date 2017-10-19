'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:NewsinfoCtrl
 * @description
 * # newsInfoCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('newsInfoCtrl', function($scope, commonService, $location, $stateParams, $loading,$state) {

        $loading.start('tmnewswithphoto');
        $loading.start('tmnewswithoutphoto');

        $scope.searchNewsField = '';
        $scope.isNews = true;
        $scope.isNewsInfo=true;

        $scope.findNews = function() {
          $state.go('search',{ID:$stateParams.ID,text:$scope.searchNewsField});
        };


        $scope.ID = $stateParams.ID;

        var getArticleCategory=commonService.getArticleCategory();
        $.each(getArticleCategory,function (index,item) {
            if (item.Id == $scope.ID){
                $scope.titleName = item.Name;
            }else{
                $.each(item.Nodes,function (i,x) {
                    if (x.Id == $scope.ID){
	                    $scope.titleName =item.Name;
                    }
	            });
            }
        });

      $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: 20});
        $scope.$watch('paginationConf.currentPage', function() {
            commonService.getData(ALL_PORT.ArticleList.url, 'POST',
                    $.extend({}, ALL_PORT.ArticleList.data, { page: $scope.paginationConf.currentPage, rows: $scope.paginationConf.itemsPerPage, categoryId: $scope.ID }))
                .then(function(response) {
                    $loading.finish('tmnewswithphoto');
                    $loading.finish('tmnewswithoutphoto');

                    $scope.paginationConf.totalItems = response.Data.Count;
                    $scope.newsData = response.Data;
                    var cName=$scope.newsData.CategoryName;
                    if (cName=='公务员培训'||cName=='专业技术人员培训'||cName=='新闻资讯'){
                        $scope.classStyle = 'blue';
                    }else if (cName == '政策法规'){
	                    $scope.classStyle = 'green';
                    }else if (cName == '公告通知'){
	                    $scope.classStyle = 'cyan';
                    }else if (cName){
	                    $scope.classStyle = 'blue';
                    }
                });
        });

    });
