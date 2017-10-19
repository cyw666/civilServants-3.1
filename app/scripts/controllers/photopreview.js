'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:PhotopreviewCtrl
 * @description
 * # PhotopreviewCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('photoPreviewCtrl', function($scope, $location, $loading, $stateParams, commonService) {
        $scope.AlbumId = $stateParams.AlbumId;
        $scope.TrainingId = $stateParams.TrainingId;
        $scope.Id = $stateParams.TrainingId;
      
        //loading
        $loading.start('photoPreview');
        $loading.start('personalLearningInfo');
        $loading.start('classMy');

        //个人学习信息
        commonService.getData(ALL_PORT.ClassInformation.url, 'POST',
                $.extend({}, ALL_PORT.ClassInformation.data, { Id: $scope.TrainingId }))
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
      $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.PhotoPreview.data.rows});


        //班级照片
        $scope.queryPhotoPreview = function(pageOptions) {
            commonService.getData(ALL_PORT.PhotoPreview.url, 'POST',
                    $.extend({}, ALL_PORT.PhotoPreview.data, { albumId: $scope.AlbumId, trainingId: $scope.TrainingId }, pageOptions))
                .then(function(response) {
                    $loading.finish('photoPreview');
                    $scope.Data = response.Data;
                    $scope.paginationConf.totalItems = response.Data.Count;
                    $scope.ImgSrc = response.Data.ImagePath;
                });
        };


        //添加照片
        $scope.getPhotoUpFile = function() {
            $scope.hidValueImage = $('#hidValueImage').val();

            commonService.getData(ALL_PORT.GetPhotoUpFile.url, 'POST',
                $.extend({}, ALL_PORT.GetPhotoUpFile.data, {
                    Name: $scope.name,
                    Description: $scope.description,
                    ImgUrl: $scope.hidValueImage,
                    TrainingId: $scope.TrainingId,
                    ParentId: $scope.AlbumId
                }))

            .then(function(response) {
                commonService.alertMs(response.Message);
                if (response.Type >= 1) {
                    document.location.reload();
                }
            });
        };


        // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
        $scope.$watch('paginationConf.currentPage', function() {
            var pageOptions = {
                page: $scope.paginationConf.currentPage,
            };

            $scope.queryPhotoPreview(pageOptions);

        });


        //放大图片
        $scope.viewPhoto = function(index) {
            $scope.imgObj = $scope.Data.ListData[index];
        };



    });
