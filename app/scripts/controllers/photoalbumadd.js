'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:PhotoalbumaddCtrl
 * @description
 * # photoAlbumAddCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('photoAlbumAddCtrl', function($scope, $location, $loading, $stateParams, $state,commonService) {
        $scope.Id = $stateParams.Id;
        $scope.location = '添加相册';
      
        commonService.getData(ALL_PORT.PhotoAlbumAdd.url, 'POST',
            $.extend({}, ALL_PORT.PhotoAlbumAdd.data, { TrainingId: $scope.Id }))

        .then(function(response) {
            $scope.data = response.Data;
        });


        //添加相册
        $scope.getPhotoAlbumAdd = function() {
            $scope.hidValueImage = $('#hidValueImage').val();
            commonService.getData(ALL_PORT.GetPhotoAlbumAdd.url, 'POST',
                    $.extend({}, ALL_PORT.GetPhotoAlbumAdd.data, { Name: $scope.name, Description: $scope.description, ImgUrl: $scope.hidValueImage, TrainingId: $scope.Id }))
                .then(function(response) {
                    commonService.alertMs(response.Message);
                    if (response.Type > 0) {
                      $state.go('photoAlbumList',{Id:$scope.Id});
                    }

                });
        };
    });
