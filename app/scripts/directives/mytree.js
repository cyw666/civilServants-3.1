'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:myTree
 * @description
 * # myTree
 */
angular.module('luZhouApp')
  .directive('myTree', function ($http) {
    return {
      templateUrl: 'components/myTree.html',
      restrict: 'EA',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, ngModel) {
        $("#tt").tree({
          url: ALL_PORT.GetGroupList.url,
          onSelect: function (node) {
            /*if(!node.SunFlag){
             $(".groupName").val(node.text);
             scope.$apply(function() {
             //调用AngularJS内部的工具更新双向绑定关系
             ngModel.$setViewValue(node.id);
             });
             $("#tt").hide();
             }*/
            $(".groupName").val(node.text);
            scope.$apply(function () {
              //调用AngularJS内部的工具更新双向绑定关系
              ngModel.$setViewValue(node.id);
            });
            $("#tt").hide();
          },
          onLoadSuccess: function (node, data) {
          }
          
        });
        
        $(".groupName").click(function () {
          $("#tt").show();
          // $(".panel").show();
          return false;
        });
        $(document).click(function () {
          $("#tt").hide();
          // $(".panel").hide();
        });
        $("#tt").click(function () {
          return false;
        });
        
        
      }
    };
  });
