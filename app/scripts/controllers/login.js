'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('LoginCtrl', function ($scope, $timeout, $rootScope, $cookieStore, $state, commonService, $loading,$stateParams) {
    //防伪造请求
    var token = commonService.AntiForgeryToken();
    $scope.showVerifyCode = false;
    //登录
    $scope.login = {
      Account: '',
      PassWord: '',
      RememberMe: true
    };
    var getCookie = commonService.getCookie;
    var setCookie = commonService.setCookie;
    var delCookie = commonService.delCookie;
    if(getCookie("RM")){
      var userCookies = TBase64.decode(getCookie("RM")).split('|');
      var RM = userCookies[0];
      var Account = userCookies[1];
      var PassWord = userCookies[2];
      $scope.login.Account=Account;
      $scope.login.PassWord=PassWord;
      $scope.login.RememberMe=true;
    }else {
      $scope.login = {
        Account: '',
        PassWord: '',
        RememberMe: true
      };
    }
    $scope.showError = false;
    //请求用户信息
    commonService.getData(ALL_PORT.LoginShort.url, 'POST', ALL_PORT.LoginShort.data)
      .then(function(response) {
        $scope.userMessage = response.Data.Model;
        $scope.userAllMessage = response.Data;
        if ($scope.userMessage.Name) {
          commonService.alertMs('用户已登录！');
          window.open("about:blank","_top").close();
        } else {
        }
      });
    //获取验证码
    $scope.getVerifyCode = commonService.getVerifyCode;
    $scope.getVerifyCode();

    //focus
    $scope.inputFocus = function() {
      $scope.showError = false;
      $scope.showValidateCodeError = false;
    }
    $scope.inputChange = function() {
      $scope.showVerifyCode = true;
      // $scope.login.ValidateCode = '';
    }


    //退出
    $scope.loginOut = commonService.loginOut;

    //踢出其他地方登录账号
    function kickOut(kickUserId) {
      //踢出操作
      commonService.getData(API_URL + "/Page/KickOut", 'POST',
        $.extend({}, ALL_PORT.LoginOut.data, { kickUserId: kickUserId },token))
        .then(function(response) {
          if (response.Type == 1) {
            //重新登录
            $scope.clickLogin();
          }
        });
    }
    //设置cookie
    function setUserCookie() {
      if($scope.login.RememberMe){
        var rmString = $scope.login.RememberMe+'|'+$scope.login.Account+'|'+$scope.login.PassWord;
        setCookie("RM",TBase64.encode(rmString),7);
      }else{
        delCookie("RM");
      }
    };
    //点击登陆
    $scope.clickLogin = function() {
      var clickLogin = function () {
        var loginParam = $.extend({},$scope.login);
        var urlShort = "LoginCode";
        if ($scope.login.ValidateCode) {
          urlShort = "Login";
        }else {
          urlShort = "LoginCode";
        }
        if (!$scope.login.Account) {
          commonService.alertMs('用户名不能为空！');
          return;
        }
        if (!$scope.login.PassWord) {
          commonService.alertMs('密码不能为空！');
          return;
        }
        if (!$scope.login.ValidateCode&&$scope.showVerifyCode) {
          commonService.alertMs('验证码不能为空！');
          return;
        }
        $loading.start('login');
        commonService.getData(API_URL + "/Page/" + urlShort, 'POST', $.extend({},loginParam, token))
          .then(function(data) {
            $loading.finish('login');
            if (data.Type == 0) {
              $scope.getVerifyCode();
              $scope.showError = true;
            } else if (data.Type == 1) {
              setUserCookie();
              $state.go($stateParams.name,JSON.parse($stateParams.params));
            } else if (data.Type == 2) {
              setUserCookie();
              commonService.alertMs("首次登录，请设置密保！");
              $state.go('securitySetting');

            } else if (data.Type == 3) {
              if (window.confirm("帐号在别的地方登录，是否踢出？")) {
                kickOut(data.Message);
                return true;
              } else {
                return false;
              }
            } else if (data.Type == 4) {
              commonService.alertMs("此电脑已经有用户登录，您不能用其他帐号再次登录！");
              $scope.getVerifyCode();
            } else if (data.Type == 5) {
              commonService.alertMs("平台当前在线人数到达上限，请稍后再试！");
              $scope.getVerifyCode();
            } else if (data.Type == 6) {
              commonService.alertMs(data.Message);
              $scope.getVerifyCode();
            } else if (data.Type == 7) {
              $scope.showValidateCodeError=true;
              $scope.getVerifyCode();
            } else if (data.Type == 10) {
              commonService.alertMs("您还不是本平台成员，将为您转向您所在的平台：" + data.Message, 2);
              $scope.getVerifyCode();
              return;
            } else if (data.Type == 11) {
              commonService.alertMs(data.Message);
              $scope.getVerifyCode();
            } else if (data.Type == 12 || data.Type == 13) {
              commonService.alertMs(data.Message);
              $scope.getVerifyCode();
            } else {
              commonService.alertMs(data.Message);
            }
          }, function(data) {
            commonService.alertMs("登陆异常！");
            window.location.reload();
          });
      }
      commonService.limitSubmit(clickLogin);
    }
  });
