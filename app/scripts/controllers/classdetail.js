'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ClassdetailCtrl
 * @description
 * # classDetailCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('classDetailCtrl', function($scope, $loading, commonService,$stateParams,$state) {
      $scope.Id = $stateParams.Id;
        //loading
        $loading.start('classMy');
        $loading.start('classDetail');
        $loading.start('personalLearningInfo');

        //我的班级
        var classMy = commonService.getData(ALL_PORT.ClassMy.url, 'POST', ALL_PORT.ClassMy.data);
        classMy.then(function(response) {
            $loading.finish('classMy');
            $scope.classMyData = response.Data;
        });

        //班级详情
        var classDetail = commonService.getData(ALL_PORT.ClassDetail.url, 'POST', $.extend({}, ALL_PORT.ClassDetail.data, { Id: $scope.Id }));
        classDetail.then(function(response) {
            $loading.finish('classDetail');
            $scope.classDetailData = response.Data;
            $scope.ImgPath = response.Data.ImagePath;
        });

        //参加测试
        $scope.havTest = function(Id) {
            var params = $.extend({}, ALL_PORT.Exam.data, $scope.token, { parameter1: Id })
            commonService.getData(ALL_PORT.Exam.url, 'POST', params)
                .then(function(response) {
                    if (response.Type) {
                        //Type存在，意味着不能考试
                        commonService.alertMs(response.Message);
                    } else {
                        // window.open("#/exam/exam/" + Id);
                      var newWindow = window.open('about:blank', '_blank');
                      var examUrl = $state.href('exam',{Id:Id});
                      newWindow.location.href = examUrl;
                    }
                });
        };
      
    });
