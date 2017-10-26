'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:CoursecenterCtrl
 * @description
 * # CoursecenterCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('CoursecenterCtrl', function ($scope, $rootScope, $cookieStore, commonService, $timeout, $loading, $stateParams) {
    $scope.showInput1 = true;
    $scope.showInput2 = false;
    $scope.showInput3 = false;
    //是否是调用推荐课程接口
    $scope.recommendApi = false;
    //显示loading
    $loading.start('courseClassify');
    //课程分类
    $scope.courseClassify=[];
    commonService.getData(ALL_PORT.CourseCategory.url, 'POST', ALL_PORT.CourseCategory.data)
      .then(function (response) {
        $loading.finish('courseClassify');
        var allCourse = [{
          SunFlag: false,
          children: null,
          id: 0,
          state: "open",
          text: "全部课程",
        }]
        $scope.courseClassify = allCourse.concat(response.Data.ListData);
      });
    
    
    //课程超市列表
    var searchText = $stateParams.title ? $stateParams.title : '';
    var channelId = $stateParams.channelId ? $stateParams.channelId : '';
    var teacher = '';
    var title = '';
    if ($stateParams.searchType === "title") {
      title = searchText;
    } else if ($stateParams.searchType === "teacher") {
      teacher = searchText;
    }
    //搜索
    $scope.selectText = [
      {name: '课程名称', id: '1'},
      {name: '课程类型', id: '2'},
      {name: '主讲人', id: '3'}
    ];
    $scope.videoType = [
      {name: '所有类型', id: 'All'},
      {name: '三分屏', id: 'ThreeScreenCourse'},
      {name: '单视频', id: 'SingleCourse'},
      {name: '动画类', id: 'AnimationCourse'}
    ];
    var courseListParams = {
      page: 1,
      rows: 10,
      sort: 'Sort',
      order: 'desc',
      courseType: 'All',
      channelId: channelId,
      title: title,
      titleNav: '课程中心',
      wordLimt: 35,
      teacher: teacher,
      flag:'all'
    };
    $scope.paginationConf = $.extend({}, paginationConf, {itemsPerPage: courseListParams.rows});
    //搜索方法
    $scope.searchCourse = function (options, isOrder) {
      $loading.start('courseSupermarket');
      if (isOrder) {
        if (courseListParams.order == 'desc') {
          courseListParams.order = 'Asc';
        } else if (courseListParams.order == 'Asc') {
          courseListParams.order = 'desc';
        }
      } else {
        courseListParams.order = 'desc';
      }
      var params = {};
      if ($scope.selectedName == "1") {
        $.extend(params, {teacher: '', title: $scope.searchTitle, courseType: $scope.selectedType}, options);
      } else if ($scope.selectedName == "2") {
        $.extend(params, {teacher: '', title: $scope.searchTitle, courseType: $scope.selectedType}, options);
      } else if ($scope.selectedName == "3") {
        $.extend(params, {teacher: $scope.searchTeacher, title: "", courseType: $scope.selectedType}, options);
      }
      
      $scope.recommendApi = false;
      $.extend(courseListParams, params);
      $scope.paginationConf.currentPage = courseListParams.page;
      commonService.getData(ALL_PORT.CourseList.url, 'POST', courseListParams)
        .then(function (response) {
          $loading.finish('courseSupermarket');
          $scope.courseSupermarketData = response.Data;
          $scope.paginationConf.totalItems = response.Data.Count;
        });
    };
    $scope.judgement = function () {
      $scope.searchTitle = "";
      $scope.searchTeacher = "";
      $scope.selectedType = "All";
      if ($scope.selectedName == "1") {
        $scope.showInput1 = true;
        $scope.showInput2 = false;
        $scope.showInput3 = false;
      } else if ($scope.selectedName == "2") {
        $scope.showInput1 = false;
        $scope.showInput2 = true;
        $scope.showInput3 = false;
      } else if ($scope.selectedName == "3") {
        $scope.showInput1 = false;
        $scope.showInput2 = false;
        $scope.showInput3 = true;
      }
    }
    //智能推荐
    $scope.getRecommendCourse = function (options) {
      $scope.recommendApi = true;
      $loading.start('courseSupermarket');
      commonService.getData(ALL_PORT.RecommendCourse.url, 'POST',
        $.extend({}, ALL_PORT.RecommendCourse.data, {page: 1, rows: 10}, options))
        .then(function (response) {
          $loading.finish('courseSupermarket');
          $scope.courseSupermarketData = response.Data;
          $scope.courseSupermarketData.ChannelName = "智能推荐";
          $scope.paginationConf.totalItems = response.Data.Count;
        });
    }
    //分页
    // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
    $scope.$watch('paginationConf.currentPage', function () {
      var pageOptions = {
        page: $scope.paginationConf.currentPage,
      };
      if ($scope.recommendApi) {
        $scope.getRecommendCourse(pageOptions);
      } else {
        $scope.searchCourse(pageOptions);
      }
    });
    $scope.selectClass = {};
    //防伪造请求
    var token = commonService.AntiForgeryToken();
    
    //全选
    $scope.checkAll = function () {
      $(":checkbox").each(function () {
        if ($(this).attr("disabled") != "disabled") {
          $(this).prop("checked", true);
        } else {
        }
      });
    }
    //反选
    $scope.selectInvert = function () {
      $(":checkbox").each(function () {
        if ($(this).attr("disabled") != "disabled") {
          if (!$(this).prop("checked")) {
            $(this).prop("checked", true);
          } else {
            $(this).prop("checked", false);
          }
        } else {
        }
      });
    }
    //批量选课
    $scope.ckBatch = function (str, page, rows) {
      var checkedsub = $(".block1 input[type='checkbox'][name='subcheck']:checked").length; //获取选中的
      var checkValue = "";
      $(".block1 input[type='checkbox'][name='subcheck']:checked").each(function () {
        if ($(this).val() !== 0) {
          checkValue += $(this).val() + ",";
        }
      });
      $scope.selectClass.checkValue = checkValue;
      if (checkValue !== '') {
        commonService.getData(ALL_PORT.AddStudyCourse.url, 'POST', $.extend({}, ALL_PORT.AddStudyCourse.data, $scope.selectClass, token))
          .then(function (response) {
            if (response.Type > 0) {
              commonService.alertMs(response.Message);
              if ($scope.recommendApi) {
                $scope.getRecommendCourse();
              } else {
                $scope.searchCourse();
              }
            }
          });
      } else {
        commonService.alertMs("您没有选择可添加的课程！");
      }
    };
    
    
    //课程点击排行
    $loading.start('courseRankingList');
    commonService.getData(ALL_PORT.CourseClickRank.url, 'POST',
      $.extend({}, ALL_PORT.CourseClickRank.data, {rows: 15}))
      .then(function (response) {
        $loading.finish('courseRankingList');
        $scope.courseRankingList = response.Data;
      });
  });
