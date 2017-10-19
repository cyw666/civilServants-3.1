'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:verificationCode
 * @description
 * # verificationCode
 */
angular.module('luZhouApp')
  .directive('verificationCode', function ($cookieStore,$interval,commonService) {
    return {
      template: '<button ng-click="sendVerificationCode(mobile)" class="btn btn-primary verificationCode">{{paracont}}</button>',
      restrict: 'EA',
      scope:{
        mobile:'='
      },
      link: function postLink(scope, element, attrs) {
        /*//正则表达式
        var reg = {
          mobile: /^1[3|4|5|7|8][0-9]\d{4,8}$/
        };
        //发送验证码
        var second;
        scope.paracont = "获取验证码";
        if($cookieStore.get('second')&&$cookieStore.get('second')>0){
          countDown ();//开始倒计时
        }
        //开始倒计时
        function countDown (){
          second = $cookieStore.get('second');
          var timePromise = undefined;
          timePromise = $interval(function(){
            if(second<=0){
              $('.verificationCode').removeAttr("disabled");
              $interval.cancel(timePromise);
              timePromise = undefined;
              scope.paracont = "重发验证码";
              return;
            }else{
              $('.verificationCode').attr("disabled", true);
              scope.paracont = second + "秒后可重发";
              second--;
              $cookieStore.put('second',second);
            }
          },1000,100);
        };
        scope.sendVerificationCode = function (mobileNo) {
          if(!mobileNo){
            alert('手机号码不能为空！');
            return;
          } else if(!reg.mobile.test(mobileNo)){
            alert('手机格式有误！');
            return;
          }
          $cookieStore.put('second',60);
          commonService.getData(ALL_PORT.SendMsg.url, 'POST',{mobileNo:mobileNo})
            .then(function(response) {
              // alert(response.Message);
              if(response.Type==1){
                countDown ();
              }else {
                alert(response.Message);
              }
            });
        };*/

        //正则表达式
        var reg = {
          mobile: /^1[3|4|5|7|8][0-9]\d{4,8}$/
        };
        scope.paracont = "获取验证码";
        scope.sendVerificationCode = function (mobileNo) {
          if(!mobileNo){
            commonService.alertMs('手机号码不能为空！');
            return;
          } else if(!reg.mobile.test(mobileNo)){
            commonService.alertMs('手机格式有误！');
            return;
          }
          commonService.getData(ALL_PORT.SendMsg.url, 'POST',{mobileNo:mobileNo})
            .then(function(response) {
              // alert(response.Message);
              if(response.Type==1){
                countDown ();
              }else {
                commonService.alertMs(response.Message);
              }
            });

          //开始倒计时
          function countDown (){
            var second = 60;
            var timePromise = undefined;
            timePromise = $interval(function(){
              if(second<=0){
                $('.verificationCode').removeAttr("disabled");
                $interval.cancel(timePromise);
                timePromise = undefined;
                scope.paracont = "重发验证码";
                return;
              }else{
                $('.verificationCode').attr("disabled", true);
                scope.paracont = second + "秒后可重发";
                second--;
              }
            },1000,100);
          };
        };

      }
    };
  });
