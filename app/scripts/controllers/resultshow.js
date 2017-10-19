'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ResultshowCtrl
 * @description
 * # ResultshowCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('ResultshowCtrl', function ($scope, $http, $cookieStore, commonService, $loading) {
    $loading.start('resultShow');
    var parmas = $.extend({},ALL_PORT.ArticleList.data,{rows:'4',wordLimt:'35',titleNav:'成果展示'})
    commonService.getData(ALL_PORT.ArticleList.url, 'POST', parmas)
      .then(function(response) {
        $loading.finish('resultShow');
        $scope.resultShowData = response.Data;
      });
  });
