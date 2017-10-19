'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmRealTimeData
 * @description
 * # tmRealTimeData
 */
angular.module('luZhouApp')
  .directive('tmRealTimeData', function () {
    return {
      templateUrl: 'components/tmRealTimeData.html',
      restrict: 'EA',
      controller: function ($scope, commonService, $loading) {
        //实时数据
        $loading.start('realTimeList');
        commonService.getData(ALL_PORT.LeftRealTimeData.url, 'POST',
          ALL_PORT.LeftRealTimeData.data)
          .then(function(response) {
            $loading.finish('realTimeList');
            $scope.realTimeData = response.Data;
          });
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
