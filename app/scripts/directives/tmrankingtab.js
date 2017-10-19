'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmRankingTab
 * @description
 * # tmRankingTab
 */
angular.module('luZhouApp')
  .directive('tmRankingTab', function () {
    return {
      templateUrl: 'components/tmRankingTab.html',
      restrict: 'EA',
      controller: function ($scope, commonService, $loading) {
        //单位排行
        $loading.start('rankingList');
        commonService.getData(ALL_PORT.LeftGroupRank.url, 'POST',
          $.extend({},ALL_PORT.LeftGroupRank.data,{rows:6}))
          .then(function(response) {
            $loading.finish('rankingList');
            $scope.govermentRanking = response.Data;
          });
        //个人学时排行
        commonService.getData(ALL_PORT.RankUserList.url, 'POST',
          $.extend({},ALL_PORT.RankUserList.data,{rows:6}) )
          .then(function(response) {
            $scope.userRankingData = response.Data;
          });
        //课程排行
        commonService.getData(ALL_PORT.CourseClickRank.url, 'POST',
          $.extend({},ALL_PORT.CourseClickRank.data,{rows:6}) )
          .then(function(response) {
            $scope.courseRankingData = response.Data;
          });
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
