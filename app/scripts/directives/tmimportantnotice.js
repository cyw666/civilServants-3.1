'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmImportantNotice
 * @description
 * # tmImportantNotice
 */
angular.module('luZhouApp')
    .directive('tmImportantNotice', function($timeout) {
        return {
            templateUrl: 'components/tmImportantNotice.html',
            restrict: 'EA',
            link: function postLink(scope, elem, attrs) {
	            $timeout(function () {
		            var className = $("#slide");

		            var i = 0, sh;
		            var liLength = className.children("li").length;

		            var liHeight = className.children("li").height();
		            className.html(className.html()+className.html());


		            // 开启定时器
		            sh = setInterval(slide, 4000);
		            function slide() {
			            if (parseFloat(className.css("margin-top")) > (-liLength * liHeight)) {

				            i++;
				            className.animate({
					            marginTop: -liHeight * i + "px"
				            }, "slow");
			            } else {
				            i = 0;
				            className.css("margin-top", "0px");
			            }
		            }

		            // 清除定时器
		            className.hover(function () {
			            clearInterval(sh);
		            }, function () {
			            clearInterval(sh);
			            sh = setInterval(slide, 4000);
		            });

	            }, 1000);
            }
        };
    });