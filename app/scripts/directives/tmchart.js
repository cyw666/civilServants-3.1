'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmChart
 * @description
 * # tmChart
 */
angular.module('luZhouApp')
  .directive('tmChart', function () {
    return {
      templateUrl: 'components/tmChart.html',
      restrict: 'EA',
      controller: function ($scope, $http, $loading, commonService, $state,$stateParams,$element, $attrs) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        var option = {
          title: {
            // show:false,
            text: '用户素质维度',
            // link:'#/courseCenter',
            textStyle:{
              fontSize: 20
            }
          },
          name: {
            textStyle:{
              color:'#333',
              fontSize:14
            }
          },
          tooltip: {},
          legend: {
            show:false,
            data: ['当前值']
          },
          radar: {
            // shape: 'circle',
            indicator: [],
            splitNumber: 4,
            center: ['50%', '55%'],
            axisLine: {
              lineStyle:{
                color:'#d7d7d7'
              },
              width: 2
            },
            splitLine: {
              show:true,
            },
            splitArea: {
              show:true,
              areaStyle: {
                color: '#fff',
                width: 2
              }
            }
          },
          series: [{
            name: '当前值',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : []
          }]
        };
        myChart.setOption(option);
        var max = 50;
        commonService.getData(ALL_PORT.GetUserSkill.url, 'POST')
          .then(function (response) {
            var data = response.Data;
            if(data){
              var indicatorData = [];
              var currentValue = [];
              var targetValue = [];
              for (var i=0;i<data.length;i++){
                var SkillValue = data[i].SkillValue;
                var RequiredValue = data[i].RequiredValue;
                var list = {name:data[i].SkillName,max:RequiredValue};
                indicatorData.push(list);
                
                if(SkillValue>max){
                  SkillValue==max;
                }else {
                  currentValue.push(SkillValue);
                }
                targetValue.push(RequiredValue);
              }
              // 指定图表的配置项和数据
              var option = {
                radar: {
                  // shape: 'circle',
                  indicator: indicatorData
                },
                series: [{
                  name: '当前值',
                  type: 'radar',
                  // areaStyle: {normal: {}},
                  data : [
                    {
                      value: targetValue,
                      name: '目标值',
                      symbol: 'none',
                      lineStyle:{
                        normal:{
                          color:'#d7d7d7'
                        }
                      }
                    },
                    {
                      value : currentValue,
                      name : '当前值',
                      lineStyle:{
                        normal:{
                          color:'#a3a3a3'
                        }
                      },
                      itemStyle:{
                        normal:{
                          color:'#a3a3a3'
                        }
                      },
                      areaStyle: {
                        normal: {
                          opacity: 0.7,
                          color: '#888d93'
                        }
                      }
                    }
                  ]
                }]
              };
              // 使用刚指定的配置项和数据显示图表。
              myChart.setOption(option);
            }
            
          });
        
      },
      link: function postLink(scope, element, attrs) {
        $(".slideBar").hover(function() {
          $(".hoverArrow").removeClass('fa-angle-double-right').addClass('fa-angle-double-left');
          $('.slideBar').animate({right:'0'},300);
        }, function() {
          $(".hoverArrow").removeClass('fa-angle-double-left').addClass('fa-angle-double-right');
          $('.slideBar').animate({right:'-430'},300,function(){});
        });
      }
    };
  });
