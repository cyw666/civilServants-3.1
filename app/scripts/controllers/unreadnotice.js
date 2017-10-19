'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:UnreadnoticeCtrl
 * @description
 * # unReadNoticeCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('unReadNoticeCtrl', function($scope, $timeout, $loading,$rootScope, $cookieStore, commonService) {

      $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.UnReadNotice.data.rows});

      $scope.queryUnReadNotice = function(options) {
            commonService.getData(ALL_PORT.UnReadNotice.url, 'POST', $.extend({}, ALL_PORT.UnReadNotice.data, options))
                .then(function(response) {
                    $scope.noticeData = response.Data;
                    $scope.paginationConf.totalItems = $scope.noticeData.Count;
                });
        }
        $scope.$watch('paginationConf.currentPage', function() {
            var options = {};
            options.page = $scope.paginationConf.currentPage;
            $scope.queryUnReadNotice(options);

        });

    });
