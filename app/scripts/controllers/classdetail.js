'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ClassdetailCtrl
 * @description
 * # classDetailCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('classDetailCtrl', function ($scope, $loading, commonService, $stateParams, $state) {
    $scope.Id = $stateParams.Id;
    //loading
    $loading.start('classMy');
    $loading.start('classDetail');
    $loading.start('personalLearningInfo');
    //查看用户权限
    $scope.checkUserClass = function () {
      commonService.getData(ALL_PORT.CheckUserClass.url, 'POST',
        $.extend({}, ALL_PORT.CheckUserClass.data, {trainingId: $scope.Id}))
        .then(function (response) {
          if (response.Type === 0) {
            alert("请先加入培训班!");
            window.history.go(-1);
          }
        });
    };
    $scope.checkUserClass();
    //我的班级
    var classMy = commonService.getData(ALL_PORT.ClassMy.url, 'POST', ALL_PORT.ClassMy.data);
    classMy.then(function (response) {
      $loading.finish('classMy');
      $scope.classMyData = response.Data;
    });
    
    //班级详情
    var classDetail = commonService.getData(ALL_PORT.ClassDetail.url, 'POST', $.extend({}, ALL_PORT.ClassDetail.data, {Id: $scope.Id}));
    classDetail.then(function (response) {
      $loading.finish('classDetail');
      $scope.classDetailData = response.Data;
      $scope.ImgPath = response.Data.ImagePath;
    });
    
    //参加测试
    $scope.havTest = function (Id) {
      var params = $.extend({}, ALL_PORT.Exam.data, $scope.token, {parameter1: Id})
      commonService.getData(ALL_PORT.Exam.url, 'POST', params)
        .then(function (response) {
          if (response.Type) {
            //Type存在，意味着不能考试
            commonService.alertMs(response.Message);
          } else {
            var newWindow = window.open('about:blank', '_blank');
            var examUrl = $state.href('exam', {Id: Id});
            newWindow.location.href = examUrl;
          }
        });
    };
    //字数change
    $scope.textNum = 140;
    $scope.inputChange = function () {
      $scope.textNum = 140 - parseInt($scope.description.length);
    }
    //分页
    $scope.paginationConf = $.extend({}, paginationConf, {itemsPerPage: 5});
    //获取班级说说列表
    $scope.getTrainingSayList = function (options) {
      commonService.getData(ALL_PORT.TrainingSayList.url, 'POST',
        $.extend({}, ALL_PORT.TrainingSayList.data, {rows: 5,mainId: $scope.Id},options))
        .then(function (response) {
          $scope.trainingSayList = response.Data.List;
          $scope.paginationConf.totalItems = response.Data.TotalCount;
        });
    }
    // $scope.getTrainingSayList();
    $scope.$watch('paginationConf.currentPage', function () {
      // 发送给后台的请求数据
      var pageOptions = {
        page: $scope.paginationConf.currentPage,
      };
      $scope.getTrainingSayList(pageOptions);
    });
    
    //添加评论 回复
    $scope.addTrainingReply = function (content,mainId,parentId) {
      // $scope.hidValueImage = $('#hidValueImage').val();
      var params = {
        content: content,
        mainId: mainId,
        parentId: parentId
      }
      if (content.length > 140) {
        alert("评论字数超出140字！");
      } else {
        commonService.getData(ALL_PORT.AddTrainingSay.url, 'POST',
          $.extend({}, ALL_PORT.AddTrainingSay.data, params))
          .then(function (response) {
            if (response.Type == 1) {
              alert("评论成功！");
              $scope.getTrainingSayList();
            } else {
              alert(response.Message);
            }
          });
      }
    };
    //删除评论 回复
    $scope.delTrainingSay = function (id) {
      commonService.getData(ALL_PORT.DelTrainingSay.url, 'POST',
        $.extend({}, ALL_PORT.DelTrainingSay.data, {id:id}))
        .then(function (response) {
          if (response.Type == 1) {
            alert(response.Message);
            $scope.getTrainingSayList();
          } else {
            alert(response.Message);
          }
        });
    };
    
  });
