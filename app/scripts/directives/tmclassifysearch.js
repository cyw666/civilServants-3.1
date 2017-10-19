'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassifySearch
 * @description
 * # tmClassifySearch
 */
angular.module('luZhouApp')
  .directive('tmClassifySearch', function () {
    return {
      templateUrl: 'components/tmClassifySearch.html',
      restrict: 'EA',
      controller: function ($scope, $http, $loading, commonService, $state,$stateParams,$element, $attrs) {
        //搜索
        $scope.showCourseTypeName = false;
        $scope.classify = [
          {name:'文章', type:"article"},
          {name:'课程', type:"course"},
        ];
        $scope.courseType = [
          {name: '全部', type: "title"},
          {name: '主讲人', type: "teacher"},
        ];
        $scope.judgement = function (type) {
          if(type === "article"){
            $scope.showCourseTypeName = false;
          }else {
            $scope.showCourseTypeName = true;
          }
        };
        $scope.searchGlobal = function () {
          if($scope.selectedName === "article"){
            $state.go('article',{title:$scope.searchTitle});
          }else {
            $state.go('courseCenter',{title:$scope.searchTitle,searchType:$scope.courseTypeName});
          }
        };
        
        var week = ['日','一','二','三','四','五','六'];
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth()+1;
        var date = now.getDate();
        var day = week[now.getDay()];
        $scope.tody = year+"年"+month+"月"+date+"日"+"星期"+day;
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
