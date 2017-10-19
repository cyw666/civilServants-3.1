'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:PhotoalbumlistCtrl
 * @description
 * # photoAlbumListCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('photoAlbumListCtrl', function($scope, $location, $loading, $stateParams, commonService) {
        $scope.Id = $stateParams.Id;

        //loading
        $loading.start('personalLearningInfo');
        $loading.start('classMy');
        $loading.start('photoAlbumList');

        //个人学习信息
        commonService.getData(ALL_PORT.ClassInformation.url, 'POST',
                $.extend({}, ALL_PORT.ClassInformation.data, { Id: $scope.Id }))
            .then(function(response) {
                $loading.finish('personalLearningInfo');
                $scope.classInfoData = response.Data;
            });


        //我的班级
        commonService.getData(ALL_PORT.ClassMy.url, 'POST',
                $.extend({}, ALL_PORT.ClassMy.data))
            .then(function(response) {
                $loading.finish('classMy');
                $scope.classMyData = response.Data;
            });

        //分页
      $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.PhotoAlbumList.data.rows});


        //班级相册
        $scope.queryPhotoAlbumList = function(pageOptions) {
            commonService.getData(ALL_PORT.PhotoAlbumList.url, 'POST',
                    $.extend({}, ALL_PORT.PhotoAlbumList.data, { Id: $scope.Id }, pageOptions))
                .then(function(response) {
                    $loading.finish('photoAlbumList');
                    $scope.Data = response.Data;
                    $scope.paginationConf.totalItems = response.Data.Count;
                    $scope.ImgSrc = response.Data.ImagePath;
                });
        };


        //添加相册
        $scope.getPhotoAlbumAdd = function() {
            $scope.hidValueImage = $('#hidValueImage').val();
            commonService.getData(ALL_PORT.GetPhotoAlbumAdd.url, 'POST',
                    $.extend({}, ALL_PORT.GetPhotoAlbumAdd.data, { Name: $scope.name, Description: $scope.description, ImgUrl: $scope.hidValueImage, TrainingId: $scope.Id }))
                .then(function(response) {
                    commonService.alertMs(response.Message);
                    if (response.Type > 0) {
                        $('.modal').modal('hide');
                        window.location.reload();
                    }

                });
        };


        // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
        $scope.$watch('paginationConf.currentPage', function() {
            var pageOptions = {
                page: $scope.paginationConf.currentPage,
            };

            $scope.queryPhotoAlbumList(pageOptions);

        });
    });
