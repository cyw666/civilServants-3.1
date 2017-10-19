'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:StudyplanCtrl
 * @description
 * # StudyplanCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('StudyplanCtrl', function ($scope, $timeout, $rootScope, $cookieStore, commonService, $location, $loading) {
    $scope.token = commonService.AntiForgeryToken();
    //学习计划
    $scope.paginationConf = $.extend({}, paginationConf, {itemsPerPage: 10});
    $scope.requestStudyPlan = function (options) {
      $loading.start('studyPlan');
      var params = $.extend({}, ALL_PORT.MyStudyPlan.data, options);
      commonService.getData(ALL_PORT.MyStudyPlan.url, 'POST', params)
        .then(function (response) {
          $loading.finish('studyPlan');
          $scope.paginationConf.totalItems = response.Data.Count;
          $scope.stydyPlanData = response.Data;

        });
    };
    $scope.$watch('paginationConf.currentPage', function () {
      var options = {};
      options.page = $scope.paginationConf.currentPage;
      $scope.requestStudyPlan(options);
    });

    //添加计划
    $scope.remindCycle = ['每天一次', '每周一次', '每月一次'];
    $scope.planAdd = function (id) {
      commonService.getData(ALL_PORT.StudyPlanAdd.url, 'POST',
        $.extend({}, ALL_PORT.StudyPlanAdd.data, {courseId: id}))
        .then(function (response) {
          $scope.planAddData = response.Data;
          $scope.PlanFinishDate = commonService.dateFilter(response.Data.PlanFinishDate, 'yyyy-MM-dd');
          $scope.RemindDate = commonService.dateFilter(response.Data.RemindDate, 'yyyy-MM-dd');
          $scope.selectCycle = response.Data.RemindCycle == '' ? "每天一次" : response.Data.RemindCycle;

        });
    }

    //提交编辑计划
    $scope.addPlanUpdate = function (options) {
      var addPlanUpdateParams = $.extend({}, ALL_PORT.EditStudyPlanUpdate.data, $scope.token, options);
      commonService.getData(ALL_PORT.EditStudyPlanUpdate.url, 'POST',
        addPlanUpdateParams)
        .then(function (response) {
          $('.modal').modal('hide');
          commonService.alertMs(response.Message);
          $scope.requestStudyPlan();
        });
    }

    //删除学习计划
    $scope.delStudyPlan = function (id) {
      commonService.getData(ALL_PORT.DelStudyPlan.url, 'POST',
        $.extend({}, ALL_PORT.DelStudyPlan.data, $scope.token, {id: id}))
        .then(function (response) {
          commonService.alertMs(response.Message);
          $scope.requestStudyPlan();
        });
    };
  });
