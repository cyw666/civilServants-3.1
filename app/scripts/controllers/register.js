'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('RegisterCtrl', function ($scope, $timeout, $rootScope, $cookieStore, $state, commonService, $loading,$interval) {
    //防伪造请求
    var token = commonService.AntiForgeryToken();
    //正则表达式
    var reg = {
      mobile: /^1[3|4|5|7|8]\d{9}$/,
      email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
      idCard: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,
    };
    $scope.register = {
      account:'',
      password:'',
      email:'',
      name:'',
      idcard:'',
      groupid:'',
      mobile:'',
      smgcode:'',
    };
    $scope.confirmPassword='';
    $scope.accountError = false;
    $scope.passwordError = false;
    $scope.confirmError = false;
    $scope.confirmError2 = false;
    $scope.emailError = false;
    $scope.emailError2 = false;
    $scope.nameError = false;
    $scope.idcardError = false;
    $scope.idcardError2 = false;
    $scope.groupidError = false;
    $scope.mobileError = false;
    $scope.mobileError2 = false;
    $scope.smgcodeError = false;
    //用户名验证
    $scope.verifyAccount = function () {
      $scope.accountError=(!$scope.register.account)?true:false;
    };
    //密码验证
    $scope.verifyPassword = function () {
      $scope.passwordError=(!$scope.register.password)?true:false;
    };
    //确认密码验证
    $scope.verifyConfirm = function () {
      if(($scope.register.password!=$scope.confirmPassword)&&$scope.register.password&&$scope.confirmPassword){
        $scope.confirmError2 = true;
        $scope.confirmError = false;
      }else if(($scope.register.password==$scope.confirmPassword)&&$scope.register.password&&$scope.confirmPassword){
        $scope.confirmError2 = false;
        $scope.confirmError = false;
      }else {
        $scope.confirmError=(!$scope.confirmPassword)?true:false;
      }
    };
    //邮箱验证
    $scope.verifyEmail = function () {
      // $scope.emailError=(!$scope.register.email)?true:false;
      /*if($scope.register.email&&reg.email.test($scope.register.email)){
        $scope.emailError2 = false;
        $scope.emailError = false;
      }else if($scope.register.email&&!reg.email.test($scope.register.email)){
        $scope.emailError2 = true;
        $scope.emailError = false;
      }else {
        $scope.emailError2 = false;
        $scope.emailError = true;
      }*/
      if($scope.register.email&&!reg.email.test($scope.register.email)){
        $scope.emailError2 = true;
        $scope.emailError = false;
      }else {
        $scope.emailError2 = false;
        $scope.emailError = false;
      }
    };
    //姓名验证
    $scope.verifyName = function () {
      $scope.nameError=(!$scope.register.name)?true:false;
    };
    //身份证号验证
    $scope.verifyIdCard = function () {
      // $scope.idcardError=(!$scope.register.idcard)?true:false;
      /*//验证身份证号码格式
      if($scope.register.idcard&&reg.idCard.test($scope.register.idcard)){
        $scope.idcardError2 = false;
        $scope.idcardError = false;
      }else if($scope.register.idcard&&!reg.idCard.test($scope.register.idcard)){
        $scope.idcardError2 = true;
        $scope.idcardError = false;
      }else {
        $scope.idcardError2 = false;
        $scope.idcardError = true;
      }*/
      //验证身份证号码格式
      if($scope.register.idcard&&!reg.idCard.test($scope.register.idcard)){
        $scope.idcardError2 = true;
        $scope.idcardError = false;
      }else {
        $scope.idcardError2 = false;
        $scope.idcardError = false;
      }
    };
    //单位验证
    $scope.verifyGroup = function () {
      $scope.groupidError=(!$scope.register.groupid)?true:false;
    };
    //手机号码验证
    $scope.verifyMobile = function () {
      // $scope.mobileError=(!$scope.register.mobile)?true:false;
      /*//验证手机号码格式
      if($scope.register.mobile&&reg.mobile.test($scope.register.mobile)){
        $scope.mobileError2 = false;
        $scope.mobileError = false;
      }else if($scope.register.mobile&&!reg.mobile.test($scope.register.mobile)){
        $scope.mobileError2 = true;
        $scope.mobileError = false;
      }else {
        $scope.mobileError2 = false;
        $scope.mobileError = true;
      }*/
      //验证手机号码格式
      if($scope.register.mobile&&!reg.mobile.test($scope.register.mobile)){
        $scope.mobileError2 = true;
        $scope.mobileError = false;
      }else {
        $scope.mobileError2 = false;
        $scope.mobileError = false;
      }
    };
    //验证码验证
    $scope.verifySmgCode = function () {
      $scope.smgcodeError=(!$scope.register.smgcode)?true:false;
    };

    //注册
    $scope.clickRegister = function () {
      var clickRegister = function () {
        if($scope.register.account && $scope.register.password && $scope.confirmPassword && !$scope.confirmError2 && $scope.register.name  && $scope.register.groupid && !$scope.idcardError2 && !$scope.emailError2 && !$scope.mobileError2){
          commonService.getData(ALL_PORT.Register.url, 'POST',$scope.register,token)
            .then(function(response) {
              if(response.Type==1){
                commonService.alertMs(response.Message);
                $state.go('main');
              }else {
                commonService.alertMs(response.Message);
              }
            });
        }else {
          commonService.alertMs('信息填写错误，请核对！');
        }
      };
      commonService.limitSubmit(clickRegister);

    };
    
    $scope.$watch('register.groupid',function () {
      if($scope.register.groupid){
        $scope.verifyGroup();
      }
        
    });

    //同意
    $scope.agree = function () {

    };
    //不同意
    $scope.noAgree = function () {
      $('#myModal').on('hidden.bs.modal', function (e) {
        $state.go('main');
      });
    }
  });
