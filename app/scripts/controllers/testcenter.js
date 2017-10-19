'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:TestcenterCtrl
 * @description
 * # TestcenterCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('TestcenterCtrl', function ($scope, $timeout, $rootScope,$state, $cookieStore, commonService, $location, $loading) {
    $scope.token = commonService.AntiForgeryToken();
    //考试中心
    $scope.selectedName = {};
    //搜索title
    $scope.searchTitle = '';
    $scope.paginationConf = $.extend({}, paginationConf, {itemsPerPage: 5});
    $scope.courseStatus = [
      {name: '全部', id: 'All'},
      {name: '已完成', id: 'Finish'},
      {name: '未完成', id: 'UnFinish'}
    ];
    $scope.vm = {activeTab:1};
    
    var examParams = {
      page: 1,
      rows: 5,
      examType: "All",
      title: "",
      sort: 'Id',
      order: 'desc',
      titleNav: "在线考试",
    }
  
    //考试列表请求
    $scope.searchMyCenterCourse = function (option, mark) {
      $loading.start('examList');
        
      $.extend(examParams,option);
      if (examParams.examType == "Finish") {
        $scope.vm.activeTab = 3;
      } else {
        $scope.vm.activeTab = 1;
      }
      commonService.getData(ALL_PORT.ExamList.url, 'POST', examParams)
        .then(function (response) {
          $loading.finish('examList');
          $scope.TotalData = response.Data;
          if (examParams.examType == "Finish") {
            $scope.paginationConf.totalItems = response.Data.FinishCount == null ? 0 : response.Data.FinishCount;
            $scope.paginationConf.currentPage = response.Data.FinishPage;
          } else {
            $scope.paginationConf.totalItems = response.Data.UnFinishCount == null ? 0 : response.Data.UnFinishCount;
            $scope.paginationConf.currentPage = response.Data.UnFinishPage;
          }
        });
    }

    //分页
    // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
    $scope.$watch('paginationConf.currentPage', function () {
      var pageOptions = {
        page: $scope.paginationConf.currentPage,
        title: $scope.searchTitle
      };
      $scope.searchMyCenterCourse(pageOptions);
    });

    //参加测试
    $scope.havTest = function (Id) {
      //打开一个不被拦截的新窗口
      var newWindow = window.open('about:blank', '_blank');
      var params = $.extend({}, ALL_PORT.Exam.data, $scope.token, {parameter1: Id})
      commonService.getData(ALL_PORT.Exam.url, 'POST', params)
        .then(function (response) {
          if (response.Type) {
            newWindow.close();
            //Type存在，意味着不能考试
            commonService.alertMs(response.Message);
          } else {
            var examUrl = $state.href('exam',{Id:Id});
            newWindow.location.href = examUrl;
          }

        });
    };
  });
