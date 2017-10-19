'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ClasspaperaddCtrl
 * @description
 * # classPaperAddCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('classPaperAddCtrl', function ($scope, $location, $stateParams, commonService, $loading, $state) {
    $scope.Id = $stateParams.Id;
    $scope.location = '发表论文';

    var token = commonService.AntiForgeryToken();

    commonService.getData(ALL_PORT.ClassPaperAdd.url, 'POST', $.extend({}, ALL_PORT.ClassPaperAdd.data, {Id: $scope.Id}))
      .then(function (response) {
        $scope.data = response.Data.ViewBag;
      });

    //获取论文分类
    commonService.getData(ALL_PORT.GetTrainingArticleCategory.url, 'POST', $.extend({}, ALL_PORT.GetTrainingArticleCategory.data, {
      trainingId: $scope.Id,
      Type: 'Paper'
    }))
      .then(function (response) {
        $scope.topicCategoryData = response;
      });

    $scope.config = ueditorConfig;

    //发布话题
    $scope.publishTopic = function () {
      var publishTopic = function () {
        if ($scope.title.length < 2) {
          commonService.alertMs('输入标题字数请大于两个字符');
        } else if ($scope.categoryId === null) {
          commonService.alertMs('请选择论文分类');
        } else {
          commonService.getData(ALL_PORT.ClassPublishArticle.url, 'POST', $.extend({}, ALL_PORT.ClassPublishArticle.data, {
            Type: 'Paper',
            TrainingId: $scope.Id,
            Name: $scope.title,
            CategoryId: $scope.categoryId,
            Content: $scope.content
          }, token)).then(function (response) {
            if (response.Type === 1) {
              commonService.alertMs(response.Message);
              $state.go('classDetail', {Id: $scope.Id});
            } else {
              commonService.alertMs(response.Message);
            }
          })
        }
      };
      commonService.limitSubmit(publishTopic);

    };

  });
