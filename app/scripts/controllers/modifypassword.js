'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ModifypasswordCtrl
 * @description
 * # modifyPasswordCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('modifyPasswordCtrl', function ($scope, commonService, $loading) {

    $scope.token = commonService.AntiForgeryToken();
    $scope.txtNewPwd = '';
    $scope.txtOldPwd = '';
    $scope.txtRepeatNewPwd = ''

    $scope.modifyPwd = function () {
      var modifyPwd = function () {
        if ($scope.txtNewPwd !== $scope.txtRepeatNewPwd) {
          commonService.alertMs('新密码不一致！');
        } else if ($scope.txtNewPwd === '' || $scope.txtNewPwd === null || $scope.txtOldPwd === '' || $scope.txtOldPwd === null) {
          commonService.alertMs("请填写信息！");
        } else if ($scope.txtNewPwd === $scope.txtOldPwd) {
          commonService.alertMs("新旧密码不能一致！");
        } else {
          commonService.getData(ALL_PORT.UpdatePwd.url, 'POST',
            $.extend({}, ALL_PORT.UpdatePwd.data, {NewPwd: $scope.txtNewPwd, OldPwd: $scope.txtOldPwd}, $scope.token))
            .then(function (response) {
              commonService.alertMs(response.Message);
            });
        }
      };
      commonService.limitSubmit(modifyPwd);

    };

  });
