'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:dateTimePicker
 * @description
 * # dateTimePicker
 */
angular.module('luZhouApp')
  .directive('dateTimePicker', function ($timeout) {
    return {
      //强制AngularJS把指令限定为只支持属性
      restrict: 'A',
      //总是和ng-model配合使用
      require: '?ngModel',
      scope: {
        select: '&'
      },
      link: function(scope, element, attrs, ngModel) {
        if (!ngModel) return;
        var config = {};
        $timeout(function () {
          config = {
            language:  'zh-CN',//显示中文
            format: 'yyyy-mm-dd',//显示格式
            weekStart: 1,
            todayBtn:  true, //显示今日按钮
            autoclose: true,//选中自动关闭
            todayHighlight: true,
            startView: "month",
            forceParse: false,
            minView: "month",//设置只显示到月份
            initialDate:new Date()
          };
          $(element).datetimepicker(config);

          // 模型值同步到视图上
          ngModel.$render = function () {
            element.val(ngModel.$viewValue || '');
          };

          // 监听元素上的事件
          element.on('blur change', function () {
            scope.$apply(setViewValue);
          });

          // 更新模型上的视图值
          function setViewValue() {
            var val = element.val();
            ngModel.$setViewValue(val);
          }
        },0);

      }
    };
  });
