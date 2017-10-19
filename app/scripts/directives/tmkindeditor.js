'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmKindeditor
 * @description
 * # tmKindeditor
 */
angular.module('luZhouApp')
  .directive('tmKindeditor', function () {
    return {
      restrict: 'EA',
      require: '?ngModel',
      link: function (scope, element, attrs, ctrl) {
        var _initContent, editor;
        var fexUE = {
          initEditor: function () {
            editor = KindEditor.create(element[0], {
              width: '100%',
              height: '400px',
              resizeType: 1,
              uploadJson: '/Upload/Upload_Ajax.ashx',
              formatUploadUrl: false,
              allowFileManager: true,
              afterChange: function () {
                ctrl.$setViewValue(this.html());
              }
            });
          },
          setContent: function (content) {
            if (editor) {
              editor.html(content);
            }
          }
        }

        if (!ctrl) {
          return;
        }
        _initContent = ctrl.$viewValue;
        ctrl.$render = function () {
          _initContent = ctrl.$isEmpty(ctrl.$viewValue) ? '' : ctrl.$viewValue;
          fexUE.setContent(_initContent);
        };
        fexUE.initEditor();
      }
    }
  });
