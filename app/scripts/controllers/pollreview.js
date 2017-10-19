'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:PollreviewCtrl
 * @description
 * # PollreviewCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('PollreviewCtrl', function ($scope, $timeout, $rootScope, $cookieStore, commonService, $location, $loading, $stateParams) {

    var parameter1 = $stateParams.parameter1;
    var parameter2 = $stateParams.parameter2;
    $loading.start('examReview');
    commonService.getData(ALL_PORT.PollReview.url, 'POST',
      $.extend({}, ALL_PORT.PollReview.data, { parameter1: parameter1, parameter2: parameter2 }))
      .then(function(response) {
        $loading.finish('examReview');
        $scope.examReviewData = response.Data;

        $scope.checkingQuestions = response.Data.Type0Questions;
        $scope.singleQuestions = response.Data.Type1Questions;
        $scope.multipleQuestions = response.Data.Type2Questions;
        $scope.gapFilling = response.Data.Type3Questions;

        $scope.examAllScore = commonService.examAllScore2;
        $scope.countIf = commonService.countIf;
        $scope.rightScore = commonService.rightScore;
      });

    $scope.getRatePoll = function (AnstCount,allData) {
      var allPoll = parseInt(allData.Ans1stCount)+parseInt(allData.Ans2ndCount)+parseInt(allData.Ans3rdCount)+parseInt(allData.Ans4thCount);
      var val = (AnstCount*100/allPoll).toFixed(2);
      return val;
    }
  });
