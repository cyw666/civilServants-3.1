'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:SecuritysettingCtrl
 * @description
 * # securitySettingCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('securitySettingCtrl', function ($scope, commonService, $loading) {

    $scope.isVisible = true;
    $scope.validatePwd = function () {
      commonService.getData(ALL_PORT.SetPasswordQuestion.url, 'POST', {pwd: $scope.myPwd})
        .then(function (response) {
          if (response.Type == 0) {
            commonService.alertMs(response.Message);
          } else {
            $scope.questionData = response.Data.Question;
            $scope.isVisible = false;
          }

        });
    };

    var token = commonService.AntiForgeryToken();

    $scope.addQuestion = function () {
      var str = angular.toJson($scope.questionData);
      var json = JSON.parse(str);
      debugger
      commonService.getData(ALL_PORT.AddPasswordQuestion.url, 'POST',
        $.extend({}, ALL_PORT.AddPasswordQuestion.data, {pwd: $scope.myPwd, questions: json}, token))

        .then(function (response) {
          commonService.alertMs(response.Message);
        });
    };

  });
