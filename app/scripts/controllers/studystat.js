'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:StudystatCtrl
 * @description
 * # StudystatCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('StudystatCtrl', function($scope, $timeout, $rootScope, $cookieStore, commonService, $location, $loading) {
        //个人学习统计
      $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: 10});
        $scope.n = 0;
        $scope.requestMyStudyStat = function(options) {
            $loading.start('studyStat');
            var params = $.extend({}, ALL_PORT.MyStudyStat.data, options);
            commonService.getData(ALL_PORT.MyStudyStat.url, 'POST',
                    params)
                .then(function(response) {
                    $loading.finish('studyStat');
                    $scope.paginationConf.totalItems = response.Data.Count;
                    $scope.studyStatData = response.Data;

                    if ($scope.n == 0) {
                        $scope.startTime = response.Data.StartDate;
                        $scope.endTime = response.Data.EndDate;
                        $scope.n = 1;
                    }
                });
        };
        $scope.$watch('paginationConf.currentPage', function() {
            var options = {};
            options.page = $scope.paginationConf.currentPage;
            $scope.requestMyStudyStat(options);
        });

    });
