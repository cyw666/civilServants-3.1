'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:SpeciallearningoneCtrl
 * @description
 * # SpeciallearningoneCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('SpeciallearningoneCtrl', function ($scope, $http, commonService, $location, $loading) {
    //专题新闻轮播
    $loading.start('specialNewSlide');
    commonService.getData(ALL_PORT.ArticleList.url, 'POST',
      $.extend({},ALL_PORT.ArticleList.data,{rows:4,CategoryCode:'specialNewsSlide',TitleNav:'专题新闻轮播'}))
      .then(function(response) {
        $loading.finish('specialNewSlide');
        $scope.slideData = response.Data;
      });
    $scope.startSlide = function () {
      setTimeout(function () {
        $('.specialNewSlide').bxSlider({
          slideWidth: 345,
          auto:true,
          controls:false,
          autoHover:true,
        });
      },0);
    };

    //习近平重要讲话新闻
    $scope.importantTalk='importantTalk';
    $loading.start($scope.importantTalk);
    commonService.getData(ALL_PORT.ArticleList.url, 'POST',
      $.extend({},ALL_PORT.ArticleList.data,{rows:7,CategoryCode:$scope.importantTalk,TitleNav:'习近平重要讲话'}))
      .then(function(response) {
        $loading.finish($scope.importantTalk);
        $scope.specialNewsData = response.Data;
      });

    //学习通知
    $scope.LearningInform='LearningInform';
    $loading.start($scope.LearningInform);
    commonService.getData(ALL_PORT.ArticleList.url, 'POST',
      $.extend({},ALL_PORT.ArticleList.data,{rows:7,CategoryCode:$scope.LearningInform,TitleNav:'学习通知'}))
      .then(function(response) {
        $loading.finish($scope.LearningInform);
        $scope.learningInformData = response.Data;
      });

    //专题课程
    $loading.start('specialLearningCourse');
    commonService.getData(ALL_PORT.CourseList.url, 'POST',
      $.extend({},ALL_PORT.CourseList.data,{rows:8,channelCode:'xiJinPingCourse',TitleNav:'习近平总书记系列重要讲话精神'}))
      .then(function(response) {
        $loading.finish('specialLearningCourse');
        $scope.specialCourseData = response.Data;
      });

    //评论观点
    $scope.commentsNews='commentsNews';
    $loading.start($scope.commentsNews);
    commonService.getData(ALL_PORT.ArticleList.url, 'POST',
      $.extend({},ALL_PORT.ArticleList.data,{rows:5,CategoryCode:$scope.commentsNews,TitleNav:'评论观点'}))
      .then(function(response) {
        $loading.finish($scope.commentsNews);
        $scope.commentsNewsData = response.Data;
      });
    //理论阐述
    $scope.theory='theory';
    $loading.start($scope.theory);
    commonService.getData(ALL_PORT.ArticleList.url, 'POST',
      $.extend({},ALL_PORT.ArticleList.data,{rows:5,CategoryCode:$scope.theory,TitleNav:'理论阐述'}))
      .then(function(response) {
        $loading.finish($scope.theory);
        $scope.theoryData = response.Data;
      });
    //各地动态
    $scope.placeState='placeState';
    $loading.start($scope.placeState);
    commonService.getData(ALL_PORT.ArticleList.url, 'POST',
      $.extend({},ALL_PORT.ArticleList.data,{rows:5,CategoryCode:$scope.placeState,TitleNav:'各地动态'}))
      .then(function(response) {
        $loading.finish($scope.placeState);
        $scope.placeStateData = response.Data;
      });

    //专题学习轮播
    $loading.start('specialTraining');
    commonService.getData(ALL_PORT.StudySpecial.url, 'POST',
      $.extend({},ALL_PORT.StudySpecial.data,{rows:10,TitleNav:'专题图片'}) )
      .then(function(response) {
        $loading.finish('specialTraining');
        $scope.studySpecialData = response.Data;
      });

    $scope.repeatFinish = function () {
      setTimeout(function () {
        $('.slider3').bxSlider({
          slideWidth: 210,
          minSlides: 5,
          maxSlides: 5,
          moveSlides: 1,
          slideMargin: 8,
          auto: true,
          autoHover:true,
          pager:false
        });
      },0);
    };

  });
