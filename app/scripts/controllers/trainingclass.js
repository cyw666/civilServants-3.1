'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:TrainingclassCtrl
 * @description
 * # TrainingclassCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('TrainingclassCtrl', function ($scope, $location,$state, $rootScope, $cookieStore, commonService, $timeout, $loading) {
    $scope.showInput1 = true;
    $scope.showInput2 = false;
    $scope.showInput3 = false;
    //loading
    $loading.start('courseClassify');
    $loading.start('classMy');

    $scope.vm = {activeTab: 1};

    //培训班分类
    commonService.getData(ALL_PORT.GetTrainingClassTypeList.url, 'POST',
      $.extend({}, ALL_PORT.GetTrainingClassTypeList.data))
      .then(function (response) {
        $loading.finish('courseClassify');
        $scope.courseClassify = response.Data;
      });
    
    //分页
    $scope.paginationConf = $.extend({}, paginationConf, {itemsPerPage: 10});

    //我的班级
    $scope.classMyType = 'my';
    commonService.getData(ALL_PORT.ClassMy.url, 'POST',
      $.extend({}, ALL_PORT.ClassMy.data))
      .then(function (response) {
        $loading.finish('classMy');
        $scope.classMyData = response.Data;
      });
    //活跃班级
    $scope.classActiveType = 'active';
    commonService.getData(ALL_PORT.ClassActive.url, 'POST',
      $.extend({}, ALL_PORT.ClassActive.data))
      .then(function (response) {
        $loading.finish('classMy');
        $scope.ClassActiveData = response.Data;
      });
    //近期班级
    $scope.classRecentType = 'recent';
    commonService.getData(ALL_PORT.ClassRecent.url, 'POST',
      $.extend({}, ALL_PORT.ClassRecent.data))
      .then(function (response) {
        $loading.finish('classMy');
        $scope.ClassRecentData = response.Data;
      });

    //培训班级列
    $scope.params = ALL_PORT.GetClassList.data;
    $scope.getClassList = function (options) {
      $loading.start('trainingCenter');
      $.extend($scope.params, options);
      commonService.getData(ALL_PORT.GetClassList.url, 'POST', $scope.params)
        .then(function (response) {
          $loading.finish('trainingCenter');
          if (response.Data.ListData.length === 0) {
            $scope.paginationConf.totalItems = 0;
          } else {
            $scope.paginationConf.totalItems = response.Data.ListData[0].Count;
          }
          if ($scope.params.type == "just") {
            $scope.justListData = response.Data;
          } else if ($scope.params.type == "immediately") {
            $scope.immediatelyListData = response.Data;
          } else if ($scope.params.type == "already") {
            $scope.alreadyListData = response.Data;
          }
        });
    };

    $scope.getClassList();
    $scope.JudgeStatus = commonService.JudgeStatus;

    //查看用户权限
    $scope.checkUserClass = function (id) {
      //打开一个不被拦截的新窗口
      var newWindow = window.open('about:blank', '_blank');
      commonService.getData(ALL_PORT.CheckUserClass.url, 'POST',
        $.extend({}, ALL_PORT.CheckUserClass.data, {trainingId: id}))
        .then(function (response) {
          if (response.Type === 0) {
            newWindow.close();
            commonService.alertMs("请先加入培训班!");
          } else {
            var examUrl = $state.href('classDetail',{Id:id});
            newWindow.location.href = examUrl;
          }
        });
    };

    //报名培训班
    $scope.addClass = function (id, type) {
      commonService.getData(ALL_PORT.UpdateTrainingStudentup.url, 'POST',
        $.extend({}, ALL_PORT.UpdateTrainingStudentup.data, {Id: id}))
        .then(function (response) {
          commonService.alertMs(response.Message);
          $scope.getClassList({type: type});
        });
    };
    //取消报名
    $scope.delClass = function (id,type) {
      commonService.getData(ALL_PORT.UpdateTrainingStudentdown.url, 'POST',
        $.extend({}, ALL_PORT.UpdateTrainingStudentdown.data, {Id: id}))
        .then(function (response) {
          commonService.alertMs(response.Message);
          $scope.getClassList({type: type});
        });
    }


    // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
    $scope.$watch('paginationConf.currentPage', function () {
      var pageOptions = {
        page: $scope.paginationConf.currentPage,
        title: $scope.searchTitle
      };
      if ($scope.vm.activeTab == 1) {
        pageOptions.type = 'just';
        $scope.getClassList(pageOptions);
      } else if ($scope.vm.activeTab == 2) {
        pageOptions.type = 'immediately';
        $scope.getClassList(pageOptions);
      } else if ($scope.vm.activeTab == 3) {
        pageOptions.type = 'already';
        $scope.getClassList(pageOptions);
      }

    });

  });
