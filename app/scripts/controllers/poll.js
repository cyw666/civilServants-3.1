'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:PollCtrl
 * @description
 * # PollCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('PollCtrl', function ($scope, $http, $rootScope, $cookieStore, commonService, $state,$location, $loading, $stateParams, $interval) {

    $scope.token = commonService.AntiForgeryToken();
    $loading.start('exam');
    var Id = $stateParams.Id;
    var params = $.extend({}, ALL_PORT.Poll.data, { parameter1: Id })
    commonService.getData(ALL_PORT.Poll.url, 'POST', params)
      .then(function(response) {
        $loading.finish('exam');
        //考试题目数量
        if(response.Data){
          $scope.examData = response.Data;
          $scope.checkingQuestions = response.Data.Type0Questions;
          $scope.singleQuestions = response.Data.Type1Questions;
          $scope.multipleQuestions = response.Data.Type2Questions;
          $scope.gapFilling = response.Data.Type3Questions;

          $scope.examAllScore1 = commonService.examAllScore;
        }else {
          alert(response.Message);
          window.open("about:blank","_top").close();
        }

      });
    //倒计时
    $interval(function() {
      $scope.seconds -= 1000;
      if ($scope.seconds == 0) {
        commonService.alertMs('考试时间到,系统将自动提交！');
        $scope.submitForm(1);
      }
    }, 1000);
    $scope.submitForm = function(e) {
      var str0 = "类型一";
      var str1 = "类型二";
      var str2 = "类型三";
      $("input:hidden[name^='questionid']").each(function(index) {
        if ($("input[name='radio" + this.value + "']").length > 0 && $("input[name='radio" + this.value + "']:checked").length === 0) {
          $(this).parent('td').css({ "backgroundColor": "red", "color": "white" });
          if ($(this).siblings('.tibg').children('span').attr("type") == "0") {
            str0 += $(this).siblings('.tibg').children('span').html();
          }
          if ($(this).siblings('.tibg').children('span').attr("type") == "1") {
            str1 += $(this).siblings('.tibg').children('span').html();
          }
        }
        if ($("input[name='checkbox" + this.value + "']").length > 0 && $("input[name='checkbox" + this.value + "']:checked").length === 0) {
          $(this).parent('td').css({ "backgroundColor": "red", "color": "white" });
          if ($(this).siblings('.tibg').children('span').attr("type") == "2") {
            str2 += $(this).siblings('.tibg').children('span').html();
          }
        }
      });
      str0 += "题、";
      str1 += "题、";
      str2 += "题、";
      if (str0 == "类型一题、") { str0 = ""; }
      if (str1 == "类型二题、") { str1 = ""; }
      if (str2 == "类型三题、") { str2 = ""; }
      if (e == "1"||((str0 + str1 + str2) === "" || ((str0 + str1 + str2) !== "" && confirm(str0 + str1 + str2 + "未答,是否提交?")))) {
        var params = $("#editForm").serialize();
  
        $http({
          method: 'POST',
          url: ALL_PORT.PostExam.url,
          data: params,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          }
        }).success(function(response) {
          if (response.Type == 1) {
            commonService.alertMs(response.Message);
            $state.go('pollreview',{parameter1:Id,parameter2:response.Value});
          } else {
            commonService.alertMs(response.Message);
          }
        }).error(function(error, status) {
          commonService.alertMs("提交失败！");
          window.close();
        });

      }
    };
  });
