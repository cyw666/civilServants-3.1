'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:PersonalcenterCtrl
 * @description
 * # PersonalcenterCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('PersonalcenterCtrl', function ($scope, $http,$state, $timeout, $rootScope, $cookieStore, commonService, $location, $loading) {
    //防伪造请求
    $scope.token = commonService.AntiForgeryToken();
    //个人中心
    $scope.selectedName = {};
    //搜索title
    $scope.searchTitle = '';
    $scope.paginationConf = $.extend({}, paginationConf, {itemsPerPage: ALL_PORT.MyCenter.data.rows});
    $scope.courseStatus = [
      {name: '所有', id: 'All'},
      {name: '正在学习课程', id: 'Unfinish'},
      {name: '指定课程', id: 'Appointed'},
      {name: '已完成课程', id: 'Finish'}
    ];
    $scope.vm = {};
    //学习课程请求
    $scope.searchMyCenterCourse = function (option) {
      $loading.start('myCenter');
      var params = $.extend({}, ALL_PORT.MyCenter.data, option);
      commonService.getData(ALL_PORT.MyCenter.url, 'POST',
        params)
        .then(function (response) {
          $loading.finish('myCenter');
          $scope.TotalData = response.Data;
          if (params.courseType == "Unfinish") {
            $scope.vm.activeTab = 1;
            $scope.paginationConf.totalItems = response.Data.UnfinishCount;
          } else if (params.courseType == "Appointed") {
            $scope.vm.activeTab = 2;
            $scope.paginationConf.totalItems = response.Data.AppointedCount;
          } else if (params.courseType == "Finish") {
            $scope.vm.activeTab = 3;
            $scope.paginationConf.totalItems = response.Data.FinishCount;
          } else if (params.courseType == "All") {
            if ($scope.vm.activeTab == 1) {
              $scope.paginationConf.totalItems = response.Data.UnfinishCount;
            } else if ($scope.vm.activeTab == 2) {
              $scope.paginationConf.totalItems = response.Data.AppointedCount;
            } else if ($scope.vm.activeTab == 3) {
              $scope.paginationConf.totalItems = response.Data.FinishCount;
            }
          }
        });
    }
    $scope.searchMyCenterCourse();
    //学习进度排序
    $scope.learningProgress = function (type) {
      if ($('.getorder span').html() == '▼') {
        $('.getorder span').html('▲');
        $scope.searchMyCenterCourse({order: 'asc', courseType: type});
      } else {
        $('.getorder span').html('▼');
        $scope.searchMyCenterCourse({order: 'desc', courseType: type});
      }
    };


    //分页
    // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
    $scope.$watch('paginationConf.currentPage', function () {
      var pageOptions = {
        page: $scope.paginationConf.currentPage,
        title: $scope.searchTitle
      };
      $scope.searchMyCenterCourse(pageOptions);
    });

    $scope.modalBody1 = true;
    $scope.modalBody2 = false;
    $scope.modalBody21 = true;
    //添加笔记
    $scope.courseId = '';
    $scope.nodeAdd = function (id) {
      $scope.courseId = id;
      $scope.modalBody1 = true;
      $scope.modalBody2 = false;
      commonService.getData(ALL_PORT.NoteAdd.url, 'POST',
        $.extend({}, ALL_PORT.NoteAdd.data, {courseId: id}))
        .then(function (response) {
          $scope.nodeAddData = response.Data;
          $scope.noteName = '';
          $scope.noteContent = '';
        });
    };

    //编辑笔记后提交请求
    $scope.editNote = function (options) {
      var editNote = function () {
        var editNoteParams = $.extend({}, ALL_PORT.AddNote.data, $scope.token, options);
        if (editNoteParams.Name.length < 2) {
          commonService.alertMs('笔记名称字数不能少于2个字！');
        } else if (editNoteParams.Content.length < 7) {
          commonService.alertMs('笔记内容字数不能少于7个字');
        } else if (editNoteParams.Content.length >= 249) {
          commonService.alertMs('笔记内容字数不能超过249个字');
        } else if (editNoteParams.Name.length >= 2 && editNoteParams.Content.length < 249) {
          commonService.getData(ALL_PORT.AddNote.url, 'POST',
            editNoteParams)
            .then(function (response) {
              $('.modal').modal('hide');
              commonService.alertMs('添加完成！')
              if ($scope.vm.activeTab == 1) {
                $scope.searchMyCenterCourse({'courseType': 'Unfinish', 'title': $scope.searchTitle});
              } else if ($scope.vm.activeTab == 2) {
                $scope.searchMyCenterCourse({'courseType': 'Appointed', 'title': $scope.searchTitle});
              } else {
                $scope.searchMyCenterCourse({'courseType': 'Finish', 'title': $scope.searchTitle});

              }
            });
        }
      };
      commonService.limitSubmit(editNote);
    }

    //查看笔记
    $scope.courseName = '';
    $scope.seeNote = function (id, courseName) {
      $scope.courseId = id;
      $scope.courseName = courseName;
      $scope.modalBody1 = false;
      $scope.modalBody2 = true;
      $scope.modalBody21 = true;
      commonService.getData(ALL_PORT.CourseNoteList.url, 'POST',
        $.extend({}, ALL_PORT.CourseNoteList.data, {CourseId: id}))
        .then(function (response) {
          response.Data.CourseName = courseName;
          $scope.seeNoteData = response.Data;
        });
    }

    //编辑
    $scope.noteid = '';
    $scope.noteUpdate = function (id) {
      $scope.noteid = id;
      $scope.modalBody1 = false;
      $scope.modalBody2 = true;
      $scope.modalBody21 = false;

      $http.get(ALL_PORT.NoteUpdate.url, {params: {noteid: id}}).success(function (response) {
        $scope.noteName = response.Name;
        $scope.noteContent = response.Content;
      });

    }

    //提交编辑
    $scope.addNoteUpdate = function (options) {
      var addNoteUpdate = function () {
        commonService.getData(ALL_PORT.NoteUpdate.url, 'POST',
          $.extend({}, ALL_PORT.NoteUpdate.data, $scope.token, options, {Id: $scope.noteid}))
          .then(function (response) {
            if (response.Type == 1) {
              commonService.alertMs('更新成功');
              $('.modal').modal('hide');
            }
          });
      };
      commonService.limitSubmit(addNoteUpdate);

    }

    //删除笔记
    $scope.delNote = function (id) {
      var delNote = function () {
        commonService.getData(ALL_PORT.DelNote.url, 'POST',
          $.extend({}, ALL_PORT.DelNote.data, $scope.token, {Id: id}))
          .then(function (response) {
            if (response.Type == 1) {
              commonService.alertMs("删除成功！");
              $scope.seeNote($scope.courseId, $scope.courseName);
              if ($scope.vm.activeTab == 1) {
                $scope.searchMyCenterCourse({'courseType': 'Unfinish', 'title': $scope.searchTitle});
              } else if ($scope.vm.activeTab == 2) {
                $scope.searchMyCenterCourse({'courseType': 'Appointed', 'title': $scope.searchTitle});
              } else {
                $scope.searchMyCenterCourse({'courseType': 'Finish', 'title': $scope.searchTitle});

              }
            }
          });
      };
      commonService.limitSubmit(delNote);

    }

    //添加计划
    $scope.remindCycle = ['每天一次', '每周一次', '每月一次'];
    $scope.planAdd = function (id) {
      $scope.modalBody1 = true;
      $scope.modalBody2 = false;
      commonService.getData(ALL_PORT.StudyPlanAdd.url, 'POST',
        $.extend({}, ALL_PORT.StudyPlanAdd.data, {courseId: id}))
        .then(function (response) {
          $scope.selectedName2 = $scope.remindCycle[0];
          $scope.planAddData = response.Data;
          $scope.PlanFinishDate = commonService.dateFilter(response.Data.PlanFinishDate, 'yyyy-MM-dd');
          $scope.RemindDate = commonService.dateFilter(response.Data.RemindDate, 'yyyy-MM-dd');

        });
    }

    //提交计划
    $scope.addPlan = function (options) {
      var addPlan = function () {
        var editPlanParams = $.extend({}, ALL_PORT.AddStudyPlan.data, $scope.token, options);
        if (editPlanParams.Remark.length < 7) {
          commonService.alertMs("计划内容字数不能少于7个字！");
        } else if (editPlanParams.Remark.length >= 249) {
          commonService.alertMs('计划内容字数不能超过249个字');
        } else {
          commonService.getData(ALL_PORT.AddStudyPlan.url, 'POST',
            editPlanParams)

            .then(function (response) {
              $('.modal').modal('hide');
              commonService.alertMs('添加完成！')
              if ($scope.vm.activeTab == 1) {
                $scope.searchMyCenterCourse({'courseType': 'Unfinish', 'title': $scope.searchTitle});
              } else if ($scope.vm.activeTab == 2) {
                $scope.searchMyCenterCourse({'courseType': 'Appointed', 'title': $scope.searchTitle});
              } else {
                $scope.searchMyCenterCourse({'courseType': 'Finish', 'title': $scope.searchTitle});
              }
            });
        }

      };
      commonService.limitSubmit(addPlan);
    }


    //查看计划
    $scope.seePlan = function (id, courseName) {
      $scope.courseId = id;
      $scope.courseName = courseName;
      $scope.modalBody1 = false;
      $scope.modalBody2 = true;
      commonService.getData(ALL_PORT.StudyPlanUpdate.url, 'POST',
        $.extend({}, ALL_PORT.StudyPlanUpdate.data, {courseId: id}))
        .then(function (response) {
          response.Data.CourseName = courseName;
          $scope.seePlanData = response.Data;
          $scope.selectedName3 = response.Data.RemindCycle;
          $scope.PlanFinishDate2 = commonService.dateFilter(response.Data.PlanFinishDate, 'yyyy-MM-dd');
          $scope.RemindDate2 = commonService.dateFilter(response.Data.RemindDate, 'yyyy-MM-dd');

        });
    }

    //提交编辑计划
    $scope.addPlanUpdate = function (options) {
      var addPlanUpdate = function () {
        var addPlanUpdateParams = $.extend({}, ALL_PORT.EditStudyPlanUpdate.data, $scope.token, options);
        if (addPlanUpdateParams.Remark.length < 7) {
          commonService.alertMs("计划内容字数不能少于7个字！");
        } else if (addPlanUpdateParams.Remark.length >= 249) {
          commonService.alertMs('计划内容字数不能超过249个字');
        } else {
          commonService.getData(ALL_PORT.EditStudyPlanUpdate.url, 'POST',
            addPlanUpdateParams)

            .then(function (response) {
              $('.modal').modal('hide');
              commonService.alertMs(response.Message)
              if ($scope.vm.activeTab == 1) {
                $scope.searchMyCenterCourse({'courseType': 'Unfinish', 'title': $scope.searchTitle});
              } else if ($scope.vm.activeTab == 2) {
                $scope.searchMyCenterCourse({'courseType': 'Appointed', 'title': $scope.searchTitle});
              } else {
                $scope.searchMyCenterCourse({'courseType': 'Finish', 'title': $scope.searchTitle});
              }
            });
        }
      };
      commonService.limitSubmit(addPlanUpdate);

    }

    //删除课程
    $scope.deleatUserCourse = function (id) {
      var deleatUserCourse = function () {
        commonService.getData(ALL_PORT.DelUserCourseReg.url, 'POST',
          $.extend({}, ALL_PORT.DelUserCourseReg.data, $scope.token, {courseId: id}))
          .then(function (response) {
            if (response.Type == 1) {
              commonService.alertMs(response.Message)
              if ($scope.vm.activeTab == 1) {
                $scope.searchMyCenterCourse({'courseType': 'Unfinish', 'title': $scope.searchTitle});
              } else if ($scope.vm.activeTab == 2) {
                $scope.searchMyCenterCourse({'courseType': 'Appointed', 'title': $scope.searchTitle});
              } else {
                $scope.searchMyCenterCourse({'courseType': 'Finish', 'title': $scope.searchTitle});
              }
            } else if (response.Type == 0) {
              commonService.alertMs(response.Message);
            }
          });
      };
      commonService.limitSubmit(deleatUserCourse);

    };

    //查看考试列表
    $scope.courseExamList = function (id) {
      commonService.getData(ALL_PORT.CourseExamList.url, 'POST',
        $.extend({}, ALL_PORT.CourseExamList.data, {courseId: id}))
        .then(function (response) {
          $scope.courseExamListData = response.Data;
        });
    };

    //参加测试
    $scope.havTest = function (Id) {
      var newWindow = window.open('about:blank', '_blank');
      var params = $.extend({}, ALL_PORT.Exam.data, $scope.token, {parameter1: Id})
      commonService.getData(ALL_PORT.Exam.url, 'POST', params)
        .then(function (response) {
        if (response.Type) {
          newWindow.close();
          //Type存在，意味着不能考试
          commonService.alertMs(response.Message);
        } else {
          var examUrl = $state.href('exam',{Id:Id});
          newWindow.location.href = examUrl;
        }

      });
    };

  });
