'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:NewscenterCtrl
 * @description
 * # NewscenterCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('csTrainingNewsCtrl', function($scope, commonService, $location, $loading,$state) {

        $loading.start('tmnewsphoto');
        $loading.start('tmpolicyandnotify');

        $scope.isNews=true;

        $scope.newsData = {
            photoNews: {
                data: [],
                ID: null
            },
            policies: {
                data: [],
                ID: null
            },
            notifies: {
                data: [],
                ID: null
            }
        };
        $scope.newsData.newsCenterTitle = ['政策法规', '公告通知'];

        var getArticleCategory =commonService.getArticleCategory();
	    $.each(getArticleCategory,function (index,item){
		    if (item.Name=='公务员培训'){
			    $scope.categoryId=item.Id;
			    $.each(item.Nodes,function (i,x) {
				    if (x.Name=='公告通知'){
					    $scope.newsData.notifies.ID = x.Id;
				    }
				    if (x.Name=='图片新闻'){
					    $scope.newsData.photoNews.ID = x.Id;
				    }
				    if (x.Name=='政策法规'){
					    $scope.newsData.policies.ID = x.Id;
				    }
			    });

		    }
	    });

        $scope.findNews = function() {
          $state.go('search',{ID:$scope.categoryId,text:$scope.searchNewsField});
        };
        $scope.goThere = function(id) {
            document.getElementById(id).scrollIntoView(true);
        };



        //图片新闻
        commonService.getData(ALL_PORT.ArticleList.url, 'POST',
                $.extend({}, ALL_PORT.ArticleList.data, { page: 1, rows: 7, categoryId:  $scope.newsData.photoNews.ID }))
            .then(function(response) {
                $loading.finish('tmnewsphoto');
                if (response.Data.ListData.length !== 0) {
                    $scope.ImgSrc = response.Data.Path + '/' + response.Data.ListData[0].Img;
                }
                $scope.newsData.photoNews.data = response.Data.ListData;
            });

        //政策法规
        commonService.getData(ALL_PORT.ArticleList.url, 'POST',
                $.extend({}, ALL_PORT.ArticleList.data, { page: 1, rows: 7, categoryId: $scope.newsData.policies.ID }))
            .then(function(response) {
                $loading.finish('tmpolicyandnotify');
                $scope.newsData.policies.data = response.Data.ListData;
            });

        //公告通知
        commonService.getData(ALL_PORT.ArticleList.url, 'POST',
                $.extend({}, ALL_PORT.ArticleList.data, { page: 1, rows: 7, categoryId: $scope.newsData.notifies.ID }))
            .then(function(response) {
                $loading.finish('tmpolicyandnotify');
                $scope.newsData.notifies.data = response.Data.ListData;
            });


    });
