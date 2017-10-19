'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ForgetpasswordCtrl
 * @description
 * # ForgetpasswordCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('ForgetpasswordCtrl', function($scope, $timeout, $rootScope, $cookieStore, commonService, $location, $loading, $stateParams) {
        $scope.showAccount = true;
        $scope.submitAccount = function(name) {
            $loading.start('forgetPassword');
            commonService.getData(ALL_PORT.GetQuestion.url, 'POST',
                    $.extend({}, ALL_PORT.GetQuestion.data, { account: name }))
                .then(function(response) {
                    $loading.finish('forgetPassword');
                    if (response.Status == 200) {
                        $scope.question = response.Data.Question.Question;
                        $scope.showAccount = false;
                    } else {
                        commonService.alertMs(response.Message);
                    }

                });
        };
        $scope.submitQuestion = function(answer) {
            $loading.start('forgetPassword');
            commonService.getData(ALL_PORT.GetPasswordByQuestion.url, 'POST',
                    $.extend({}, ALL_PORT.GetPasswordByQuestion.data, { account: $scope.account, question: $scope.question, answer: answer }))
                .then(function(response) {
                    $loading.finish('forgetPassword');
                    commonService.alertMs(response.Message);

                });
        };
    });
