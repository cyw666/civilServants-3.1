'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ExamreviewCtrl
 * @description
 * # ExamreviewCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('ExamreviewCtrl', function($scope, $timeout, $rootScope, $cookieStore, commonService, $location, $loading, $stateParams) {

        var parameter1 = $stateParams.examId;
        var parameter2 = $stateParams.recordId;
        $loading.start('examReview');
        commonService.getData(ALL_PORT.ExamReview.url, 'POST',
                $.extend({}, ALL_PORT.ExamReview.data, { parameter1: parameter1, parameter2: parameter2 }))
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
    });
