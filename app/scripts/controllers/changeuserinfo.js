'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ChangeuserinfoCtrl
 * @description
 * # changeUserInfoCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('changeUserInfoCtrl', function ($scope, $interval,$state, commonService, $loading, $http, $cookieStore) {
    
    //获取用户信息
    $loading.start('changeUserInfo');
    commonService.getData(ALL_PORT.GetUserInfo.url, 'POST', ALL_PORT.GetUserInfo.data)
      .then(function (data) {
        $loading.finish('changeUserInfo');
        $scope.userInfo = data.Data.Model;
        $scope.sex = data.Data.Model.Sex;
        $scope.Grade = data.Data.Model.GradeId;
        $scope.Business = data.Data.Model.Business;
        $scope.Tel = data.Data.Model.Tel;
        $scope.Email = data.Data.Model.Email;
        $scope.Mobile = data.Data.Model.Mobile;
      });
    //获取职位分类
    commonService.getData(ALL_PORT.GetGradeList.url, 'POST', ALL_PORT.GetGradeList.data)
      .then(function (data) {
        $scope.gradeList = data.GroupInfoList;
      });
    
    
    var token = commonService.AntiForgeryToken();
    //正则表达式
    var reg = {
      mobile: /^1[3|4|5|7|8][0-9]\d{4,8}$/,
      email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
      tel: /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/,
      business: /^[a-zA-Z\u4e00-\u9fa5]+$/
    };
    $scope.changeUser = function () {
      var changeUser = function () {
        var options = {
          Grade: $scope.Grade,
          Business: $scope.Business,
          Sex: $scope.sex,
          Email: $scope.Email,
          Mobile: $scope.Mobile,
          Tel: $scope.Tel
        };
        var telTest = false, mobileTest = false, emailTest = false, businessTest = false;
        if (options.Tel) {
          telTest = reg.tel.test(options.Tel);
        } else {
          telTest = true;
        }
        if (options.Mobile) {
          mobileTest = reg.mobile.test(options.Mobile);
        } else {
          mobileTest = true;
        }
        if (options.Email) {
          emailTest = reg.email.test(options.Email);
        } else {
          emailTest = true;
        }
        if (options.Business) {
          businessTest = reg.business.test(options.Business);
        } else {
          businessTest = true;
        }
        
        
        if (telTest && mobileTest && emailTest && businessTest) {
          var updateUserInfo = commonService.getData(ALL_PORT.UpdateUserInfo.url, 'POST', $.extend({}, ALL_PORT.UpdateUserInfo.data, options, token));
          updateUserInfo.then(function (response) {
            commonService.alertMs(response.Message);
            // window.location.reload();
            if(response.Type==1){
              $state.go('main');
            }
          });
        } else if (!mobileTest) {
          commonService.alertMs('请输入正确格式的手机号');
        } else if (!telTest) {
          commonService.alertMs('请输入正确格式的电话');
        } else if (!emailTest) {
          commonService.alertMs('请输入正确格式的邮箱');
        } else if (!businessTest) {
          commonService.alertMs('请输入正确格式的职务名称');
        }
      };
      commonService.limitSubmit(changeUser);
      
    };
    
  });
