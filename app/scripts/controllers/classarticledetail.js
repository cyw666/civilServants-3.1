'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ClassarticledetailCtrl
 * @description
 * # classArticleDetailCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('classArticleDetailCtrl', function($scope, $loading, $stateParams, commonService) {
        $scope.Id = $stateParams.Id;
      
        $scope.isshow = true;

        $loading.start('tmshowarticledetail');

        //班级文章内容
        var classArticleDetail = commonService.getData(ALL_PORT.ClassArticleDetail.url, 'POST', $.extend({}, ALL_PORT.ClassArticleDetail.data, { Id: $scope.Id }));
        classArticleDetail.then(function(response) {
            $loading.finish('tmshowarticledetail');
            $scope.articleData = response.Data.Model;
            $scope.Data = response.Data.Model;
            $scope.CreatedDate = response.Data.Model.CreatedDate;
        });
    });
