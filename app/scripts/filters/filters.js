'use strict';

/**
 * @ngdoc filter
 * @name luZhouApp.filter:filters
 * @function
 * @description
 * # filters
 * Filter in the luZhouApp.
 */
angular.module('luZhouApp')
  .filter('dateFilter', function () {
    return function (date) {
      if (!date) {
        return "";
      }
      date = date.match(/\d+/ig)[0];
      return date;
    };
  })
  .filter('wordLimit', function () {
    return function (text,num) {
      var des='';
      if (typeof text=="string") {
        if (text.length>num){
          des = text.substring(0,num)+"...";
          return des;
        }else {
          return text;
        }
      }
    };
  })
  .filter('trustHtml', function ($sce) {
    return function (input) {
      return $sce.trustAsHtml(input);
    };
  })
  .filter('formatSeconds', function () {
    return function (value) {
      if (!value) return
      var theTime = parseInt(value);// 秒
      var theTime1 = 0;// 分
      var theTime2 = 0;// 小时
      if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
          theTime2 = parseInt(theTime1 / 60);
          theTime1 = parseInt(theTime1 % 60);
        }
      }
      var result = "" + parseInt(theTime) + "秒";
      if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + "分" + result;
      }
      if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + "小时" + result;
      }
      return result;
    }

  })
  .filter('delHtmlTag', function () {
    return function (value) {
      if (!value) return
      var result = value.replace(/<[^>]+>|&nbsp;| /ig,"");//去掉所有的html标记
      return result;
    }
  });
