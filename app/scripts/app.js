'use strict';

/**
 * @ngdoc overview
 * @name luZhouApp
 * @description
 * # luZhouApp
 *
 * Main module of the application.
 */
angular
  .module('luZhouApp', [
    'ng',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'darthwade.dwLoading',
    'ng.ueditor',
    'ui.router',
  ])
  .config(function ($routeProvider, $httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('error', {
        url: '/error',
        templateUrl: 'views/error.html',
        controller: 'ErrorCtrl',
        controllerAs: 'error',
        data: {title: "没有此页面"}
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        data: {title: "干部教育网络学院-基准3.0"}
      })
      .state('main2', {
        url: '',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        data: {title: "干部教育网络学院-基准3.0"}
      })
      .state('courseCenter', {
        url: '/courseCenter?channelId&title&searchType',
        templateUrl: 'views/coursecenter.html',
        controller: 'CoursecenterCtrl',
        controllerAs: 'courseCenter',
        data: {title: "课程中心"}
      })
      .state('noticelist', {
        url: '/noticelist',
        data: {title: "通知公告"},
        templateUrl: 'views/noticelist.html',
        controller: 'NoticelistCtrl',
        controllerAs: 'noticeList'
      })
      .state('courseCenterBuy', {
        url: '/courseCenterBuy',
        data: {title: "课程中心"},
        templateUrl: 'views/coursecenterbuy.html',
        controller: 'CoursecenterbuyCtrl',
        controllerAs: 'courseCenterBuy'
      })
      .state('personalCenter', {
        url: '/personalCenter',
        templateUrl: 'views/personalcenter.html',
        controller: 'PersonalcenterCtrl',
        controllerAs: 'personalCenter',
        data: {title: "个人中心"}
      })
      .state('testCenter', {
        url: '/testCenter',
        templateUrl: 'views/testcenter.html',
        controller: 'TestcenterCtrl',
        controllerAs: 'testCenter',
        data: {title: "在线考试"}
      })
      .state('trainingClass', {
        url: '/trainingClass',
        data: {title: "班级园地"},
        templateUrl: 'views/trainingClass.html',
        controller: 'TrainingclassCtrl',
        controllerAs: 'trainingClass'
      })
      .state('csTrainingNews', {
        url: '/csTrainingNews',
        templateUrl: 'views/news/cstrainingnews.html',
        controller: 'csTrainingNewsCtrl',
        controllerAs: 'csTrainingNews',
        data: {title: "公务员培训新闻"}
      })
      .state('patpTrainingNews', {
        url: '/patpTrainingNews',
        templateUrl: 'views/news/patptrainingnews.html',
        controller: 'patpTrainingNewsCtrl',
        controllerAs: 'patpTrainingNews',
        data: {title: "专业技术人员培训新闻"}
      })
      .state('articleDetail', {
        url: '/articleDetail/:ID',
        templateUrl: 'views/news/articledetail.html',
        controller: 'articleDetailCtrl',
        controllerAs: 'articleDetail',
        data: {title: "文章内容"}
      })
      .state('newsinfo', {
        url: '/newsinfo/:ID',
        data: {title: "新闻信息"},
        templateUrl: 'views/news/newsinfo.html',
        controller: 'newsInfoCtrl',
        controllerAs: 'NewsInfo'
      })
      .state('noticeDetail', {
        url: '/noticeDetail/:ID',
        data: {title: "通知内容"},
        templateUrl: 'views/news/articledetail.html',
        controller: 'noticeDetailCtrl',
        controllerAs: 'noticeDetail'
      })
      .state('search', {
        url: '/search/:text',
        data: {title: "搜索结果"},
        templateUrl: 'views/news/searchresult.html',
        controller: 'searchResultCtrl',
        controllerAs: 'searchResult'
      })
      .state('courseDetails', {
        url: '/courseCenter/courseDetails/:Id',
        data: {title: "课程详情"},
        templateUrl: 'views/courseCenter/coursedetails.html',
        controller: 'CoursedetailsCtrl',
        controllerAs: 'courseDetails'
      })
      .state('studyStat', {
        url: '/personalCenter/studyStat',
        data: {title: "学习统计"},
        templateUrl: 'views/personalCenter/studystat.html',
        controller: 'StudystatCtrl',
        controllerAs: 'studyStat'
      })
      .state('testStat', {
        url: '/personalCenter/testStat',
        data: {title: "考试统计"},
        templateUrl: 'views/personalCenter/teststat.html',
        controller: 'TeststatCtrl',
        controllerAs: 'testStat'
      })
      .state('myFavorite', {
        url: '/personalCenter/myFavorite',
        data: {title: "我的收藏"},
        templateUrl: 'views/personalCenter/myfavorite.html',
        controller: 'MyfavoriteCtrl',
        controllerAs: 'myFavorite'
      })
      .state('studyPlan', {
        url: '/personalCenter/studyPlan',
        data: {title: "学习计划"},
        templateUrl: 'views/personalCenter/studyplan.html',
        controller: 'StudyplanCtrl',
        controllerAs: 'studyPlan'
      })
      .state('unReadNotice', {
        url: '/personalCenter/unReadNotice',
        data: {title: "个人通知"},
        templateUrl: 'views/personalCenter/unreadnotice.html',
        controller: 'unReadNoticeCtrl',
        controllerAs: 'unReadNotice'
      })
      .state('modifyPassword', {
        url: '/personalCenter/modifyPassword',
        data: {title: "修改密码"},
        templateUrl: 'views/personalCenter/modifyPassword.html',
        controller: 'modifyPasswordCtrl',
        controllerAs: 'modifyPassword'
      })
      .state('securitySetting', {
        url: '/personalCenter/securitySetting',
        data: {title: "设置密保"},
        templateUrl: 'views/personalCenter/securitysetting.html',
        controller: 'securitySettingCtrl',
        controllerAs: 'securitySetting'
      })
      .state('changeUser', {
        url: '/personalCenter/changeUser',
        data: {title: "个人信息修改"},
        templateUrl: 'views/personalCenter/changeuserinfo.html',
        controller: 'changeUserInfoCtrl',
        controllerAs: 'changeUserInfo'
      })
      .state('classDetail', {
        url: '/trainingClass/classDetail/:Id',
        data: {title: "班级详情"},
        templateUrl: 'views/trainingClass/classdetail.html',
        controller: 'classDetailCtrl',
        controllerAs: 'classDetail'
      })
      .state('classPlan', {
        url: '/trainingClass/classPlan/:Id',
        data: {title: "教学计划"},
        templateUrl: 'views/trainingClass/classplan.html',
        controller: 'classPlanCtrl',
        controllerAs: 'classPlan'
      })
      .state('classStudent', {
        url: '/trainingClass/classStudent/:Id',
        data: {title: "同学名录"},
        templateUrl: 'views/trainingClass/classstudent.html',
        controller: 'classStudentCtrl',
        controllerAs: 'classStudent'
      })
      .state('classPaperList', {
        url: '/trainingClass/classPaperList/:Id',
        data: {title: "班级论文"},
        templateUrl: 'views/trainingClass/classpaperlist.html',
        controller: 'classPaperListCtrl',
        controllerAs: 'classPaperList'
      })
      .state('photoAlbumList', {
        url: '/trainingClass/photoAlbumList/:Id',
        data: {title: "班级相册"},
        templateUrl: 'views/trainingClass/photoalbumlist.html',
        controller: 'photoAlbumListCtrl',
        controllerAs: 'photoAlbumList'
      })
      .state('classTopicList', {
        url: '/trainingClass/classTopicList/:Id',
        data: {title: "班级话题"},
        templateUrl: 'views/trainingClass/classtopiclist.html',
        controller: 'classTopicListCtrl',
        controllerAs: 'classTopicList'
      })
      .state('classCourse', {
        url: '/trainingClass/classCourse/:Id/:Type',
        data: {title: "班级课程"},
        templateUrl: 'views/trainingClass/classcourse.html',
        controller: 'classCourseCtrl',
        controllerAs: 'classCourse'
      })
      .state('classNotice', {
        url: '/trainingClass/classNotice/:Id',
        data: {title: "班级公告"},
        templateUrl: 'views/trainingClass/classnotice.html',
        controller: 'classNoticeCtrl',
        controllerAs: 'classNotice'
      })
      .state('classExam', {
        url: '/trainingClass/classExam/:Id',
        data: {title: "班级考试"},
        templateUrl: 'views/trainingClass/classexam.html',
        controller: 'classExamCtrl',
        controllerAs: 'classExam'
      })
      .state('classArticleDetail', {
        url: '/trainingClass/classArticleDetail/:Id',
        data: {title: "班级文章内容"},
        templateUrl: 'views/trainingClass/classarticledetail.html',
        controller: 'classArticleDetailCtrl',
        controllerAs: 'classArticleDetail'
      })
      .state('classTopicAdd', {
        url: '/trainingClass/classTopicAdd/:Id',
        data: {title: "添加话题"},
        templateUrl: 'views/trainingClass/classtopicadd.html',
        controller: 'classTopicAddCtrl',
        controllerAs: 'classTopicAdd'
      })
      .state('classPaperAdd', {
        url: '/trainingClass/classPaperAdd/:Id',
        data: {title: "添加论文"},
        templateUrl: 'views/trainingClass/classpaperadd.html',
        controller: 'classPaperAddCtrl',
        controllerAs: 'classPaperAdd'
      })
      .state('photoAlbumAdd', {
        url: '/trainingClass/photoAlbumAdd/:Id',
        data: {title: "添加相册"},
        templateUrl: 'views/trainingClass/photoalbumadd.html',
        controller: 'photoAlbumAddCtrl',
        controllerAs: 'photoAlbumAdd'
      })
      .state('photoPreview', {
        url: '/trainingClass/photoPreview/:AlbumId/:TrainingId',
        data: {title: "班级照片"},
        templateUrl: 'views/trainingClass/photopreview.html',
        controller: 'photoPreviewCtrl',
        controllerAs: 'photoPreview'
      })
      .state('messageList', {
        url: '/personalCenter/messageList',
        data: {title: "留言板"},
        templateUrl: 'views/personalCenter/messagelist.html',
        controller: 'MessagelistCtrl',
        controllerAs: 'messageList'
      })
      .state('messageDetail', {
        url: '/personalCenter/messageList/messageDetail/:Id',
        data: {title: "留言板详情"},
        templateUrl: 'views/personalCenter/messagedetail.html',
        controller: 'MessagedetailCtrl',
        controllerAs: 'messageDetail'
      })
      .state('exam', {
        url: '/exam/exam/:Id',
        data: {title: "考试"},
        templateUrl: 'views/exam/exam.html',
        controller: 'ExamCtrl',
        controllerAs: 'exam'
      })
      .state('personaLearningArchives', {
        url: '/personalCenter/personaLearningArchives',
        data: {title: "个人学习档案"},
        templateUrl: 'views/personalCenter/personalearningarchives.html',
        controller: 'PersonalearningarchivesCtrl',
        controllerAs: 'personaLearningArchives'
      })
      .state('examDetailList', {
        url: '/exam/examDetailList/:Id',
        data: {title: "考试记录列表"},
        templateUrl: 'views/exam/examdetaillist.html',
        controller: 'ExamdetaillistCtrl',
        controllerAs: 'examDetailList'
      })
      .state('examReview', {
        url: '/exam/examReview/:examId/:recordId',
        data: {title: "考试详情"},
        templateUrl: 'views/exam/examreview.html',
        controller: 'ExamreviewCtrl',
        controllerAs: 'examReview'
      })
      .state('play', {
        url: '/play/play/:Id',
        data: {title: "课程播放"},
        templateUrl: 'views/play/play.html',
        controller: 'PlayCtrl',
        controllerAs: 'play'
      })
      .state('tryplay', {
        url: '/play/tryplay/:Id',
        data: {title: "课程试看"},
        templateUrl: 'views/play/tryplay.html',
        controller: 'TryplayCtrl',
        controllerAs: 'tryPlay'
      })
      .state('forgetPassword', {
        url: '/personalCenter/forgetPassword',
        data: {title: "忘记密码"},
        templateUrl: 'views/personalCenter/forgetpassword.html',
        controller: 'ForgetpasswordCtrl',
        controllerAs: 'forgetPassword'
      })
      .state('userRankingList', {
        url: '/rankingList/userRankingList',
        data: {title: "个人排行"},
        templateUrl: 'views/rankingList/userrankinglist.html',
        controller: 'UserrankinglistCtrl',
        controllerAs: 'userRankingList'
      })
      .state('userLogin', {
        url: '/userLogin/:name/:params',
        data: {title: "登录"},
        templateUrl: 'views/Do/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'LoginCtrl'
      })
      .state('rankgroup', {
        url: '/rankingList/rankgroup',
        data: {title: "单位排行"},
        templateUrl: 'views/rankingList/rankgroup.html',
        controller: 'RankgroupCtrl',
        controllerAs: 'rankGroup'
      })
      .state('rankcourseclick', {
        url: '/rankingList/rankcourseclick',
        data: {title: "课程点击排行"},
        templateUrl: 'views/rankingList/rankcourseclick.html',
        controller: 'RankcourseclickCtrl',
        controllerAs: 'rankCourseClick'
      })
      .state('rankcoursefinish', {
        url: '/rankingList/rankcoursefinish',
        data: {title: "学完课程排行"},
        templateUrl: 'views/rankingList/rankcoursefinish.html',
        controller: 'RankcoursefinishCtrl',
        controllerAs: 'rankCourseFinish'
      })
      .state('rankloginsum', {
        url: '/rankingList/rankloginsum',
        data: {title: "登录次数排行"},
        templateUrl: 'views/rankingList/rankloginsum.html',
        controller: 'RankloginsumCtrl',
        controllerAs: 'rankLoginSum'
      })
      .state('software', {
        url: '/Do/software',
        data: {title: "必装软件"},
        templateUrl: 'views/Do/software.html',
        controller: 'SoftwareCtrl',
        controllerAs: 'Software'
      })
      .state('originalarticle', {
        url: '/news/originalarticle',
        data: {title: "发表心声"},
        templateUrl: 'views/news/originalarticle.html',
        controller: 'OriginalarticleCtrl',
        controllerAs: 'originalArticle'
      })
      .state('originalarticlelist', {
        url: '/news/originalarticlelist',
        data: {title: "学员心声列表"},
        templateUrl: 'views/news/originalarticlelist.html',
        controller: 'OriginalarticlelistCtrl',
        controllerAs: 'originalArticleList'
      })
      .state('classlist', {
        url: '/trainingClass/classlist?type',
        data: {title: "我的班级"},
        templateUrl: 'views/trainingClass/classlist.html',
        controller: 'ClasslistCtrl',
        controllerAs: 'classList',
      })
      .state('polllist', {
        url: '/exam/polllist',
        data: {title: "问卷列表"},
        templateUrl: 'views/exam/polllist.html',
        controller: 'PolllistCtrl',
        controllerAs: 'pollList'
      })
      .state('poll', {
        url: '/exam/poll/:Id',
        data: {title: "投票"},
        templateUrl: 'views/exam/poll.html',
        controller: 'PollCtrl',
        controllerAs: 'poll'
      })
      .state('pollreview', {
        url: '/exam/pollreview/:parameter1/:parameter2',
        data: {title: "投票结果"},
        templateUrl: 'views/exam/pollreview.html',
        controller: 'PollreviewCtrl',
        controllerAs: 'pollReview'
      })
      .state('userRegister', {
        url: '/Do/userRegister',
        data: {title: "注册"},
        templateUrl: 'views/Do/register.html',
        controller: 'RegisterCtrl'
      })
      .state('library', {
        url: '/library',
        data: {title: "电子书"},
        templateUrl: 'views/library/library.html',
        controller: 'LibraryCtrl',
        controllerAs: 'library'
      })
      .state('bookdetail', {
        url: '/library/bookdetail?Id',
        data: {title: "图书详情"},
        templateUrl: 'views/library/bookdetail.html',
        controller: 'BookdetailCtrl',
        controllerAs: 'bookDetail'
      })
      .state('bookchapter', {
        url: '/library/bookchapter?bookId',
        data: {title: "图书章节"},
        templateUrl: 'views/library/bookchapter.html',
        controller: 'BookchapterCtrl',
        controllerAs: 'bookChapter'
      })
      .state('bookchaptercontent', {
        url: '/library/bookchaptercontent?Id',
        data: {title: "章节内容"},
        templateUrl: 'views/library/bookchaptercontent.html',
        controller: 'BookchaptercontentCtrl',
        controllerAs: 'bookChapterContent'
      })
      .state('article', {
        url: '/news/article?categoryCode&title',
        data: {title: "文章"},
        templateUrl: 'views/news/article.html',
        controller: 'ArticleCtrl',
        controllerAs: 'article'
      })
      .state('collegeinfo', {
        url: '/Do/collegeinfo',
        data: {title: "平台介绍"},
        templateUrl: 'views/Do/collegeinfo.html',
        controller: 'CollegeinfoCtrl',
        controllerAs: 'collegeInfo'
      })
      .state('studentstyle', {
        url: '/Do/studentstyle',
        data: {title: "学员风采"},
        templateUrl: 'views/Do/studentstyle.html',
        controller: 'StudentstyleCtrl',
        controllerAs: 'studentStyle'
      })
      .state('studentstyledetail', {
        url: '/Do/studentstyledetail?Id',
        data: {title: "我的风采"},
        templateUrl: 'views/Do/studentstyledetail.html',
        controller: 'StudentstyledetailCtrl',
        controllerAs: 'studentStyleDetail'
      })
      .state('resultshow', {
        url: '/Do/resultshow',
        data: {title: "成果展示"},
        templateUrl: 'views/Do/resultshow.html',
        controller: 'ResultshowCtrl',
        controllerAs: 'resultShow'
      })
      .state('speciallearning', {
        url: '/speciallearning',
        data: {title: "专题学习"},
        templateUrl: 'views/specialLearning/speciallearning.html',
        controller: 'SpeciallearningCtrl',
        controllerAs: 'specialLearning'
      })
      .state('speciallearningone', {
        url: '/speciallearning/speciallearningone',
        data: {title: "习近平重要讲话精神"},
        templateUrl: 'views/specialLearning/speciallearningone.html',
        controller: 'SpeciallearningoneCtrl',
        controllerAs: 'specialLearningOne'
      })
      .state('shoppingcart', {
        url: '/shopping/shoppingcart',
        data: {title: "购物车"},
        templateUrl: 'views/shopping/shoppingcart.html',
        controller: 'ShoppingcartCtrl',
        controllerAs: 'ShoppingCart'
      })
      .state('orderdetaillist', {
        url: '/shopping/orderdetaillist?orderId',
        data: {title: "订单详细"},
        templateUrl: 'views/shopping/orderdetaillist.html',
        controller: 'OrderdetaillistCtrl',
        controllerAs: 'orderDetailList'
      })
      .state('payconfirm', {
        url: '/shopping/payconfirm?orderId',
        data: {title: "支付确认"},
        templateUrl: 'views/shopping/payconfirm.html',
        controller: 'PayconfirmCtrl',
        controllerAs: 'payConfirm'
      })
      .state('orderconfirm', {
        url: '/shopping/orderconfirm?invoiceId',
        data: {title: "订单确认"},
        templateUrl: 'views/shopping/orderconfirm.html',
        controller: 'OrderconfirmCtrl',
        controllerAs: 'orderConfirm'
      })
      .state('orderlist', {
        url: '/shopping/orderlist',
        data: {title: "我的订单"},
        templateUrl: 'views/shopping/orderlist.html',
        controller: 'OrderlistCtrl',
        controllerAs: 'orderList'
      })
      .state('invoicelist', {
        url: '/shopping/invoicelist',
        data: {title: "我的发票"},
        templateUrl: 'views/shopping/invoicelist.html',
        controller: 'InvoicelistCtrl',
        controllerAs: 'invoiceList'
      })
      .state('applyinvoice', {
        url: '/shopping/applyinvoice',
        data: {title: "申请发票"},
        templateUrl: 'views/shopping/applyinvoice.html',
        controller: 'ApplyinvoiceCtrl',
        controllerAs: 'applyInvoice'
      })
    $urlRouterProvider.otherwise('/error');
    // $locationProvider.html5Mode(true);
    
    /*$routeProvider
     .when('/main', {
     templateUrl: 'views/main.html',
     controller: 'MainCtrl',
     controllerAs: 'main'
     })
     .when('/courseCenter', {
     templateUrl: 'views/coursecenter.html',
     controller: 'CoursecenterCtrl',
     controllerAs: 'courseCenter'
     })
     .when('/courseCenter/:channelId', {
     templateUrl: 'views/coursecenter.html',
     controller: 'CoursecenterCtrl',
     controllerAs: 'courseCenter'
     })
     .when('/personalCenter', {
     templateUrl: 'views/personalcenter.html',
     controller: 'PersonalcenterCtrl',
     controllerAs: 'personalCenter'
     })
     .when('/testCenter', {
     templateUrl: 'views/testcenter.html',
     controller: 'TestcenterCtrl',
     controllerAs: 'testCenter'
     })
     .when('/specialTrainingCourse', {
     templateUrl: 'views/specialtrainingcourse.html',
     controller: 'SpecialtrainingcourseCtrl',
     controllerAs: 'specialTrainingCourse'
     })
     .when('/csTrainingNews',{
     templateUrl: 'views/news/cstrainingnews.html',
     controller: 'csTrainingNewsCtrl',
     controllerAs: 'csTrainingNews'
     })
     .when('/patpTrainingNews',{
     templateUrl: 'views/news/patptrainingnews.html',
     controller: 'patpTrainingNewsCtrl',
     controllerAs: 'patpTrainingNews'
     })
     .when('/articleDetail/:ID',{
     templateUrl: 'views/news/articledetail.html',
     controller: 'articleDetailCtrl',
     controllerAs: 'articleDetail'
     })
     .when('/newsinfo/:ID',{
     templateUrl: 'views/news/newsinfo.html',
     controller: 'newsInfoCtrl',
     controllerAs: 'NewsInfo'
     })
     .when('/noticeDetail/:ID',{
     templateUrl: 'views/news/articledetail.html',
     controller: 'noticeDetailCtrl',
     controllerAs: 'noticeDetail'
     })
     .when('/search/:ID/:text',{
     templateUrl:'views/news/searchresult.html',
     controller:'searchResultCtrl',
     controllerAs:'searchResult'
     })
     .when('/courseCenter/courseDetails/:Id', {
     templateUrl: 'views/courseCenter/coursedetails.html',
     controller: 'CoursedetailsCtrl',
     controllerAs: 'courseDetails'
     })
     .when('/personalCenter/studyStat', {
     templateUrl: 'views/personalCenter/studystat.html',
     controller: 'StudystatCtrl',
     controllerAs: 'studyStat'
     })
     .when('/personalCenter/testStat', {
     templateUrl: 'views/personalCenter/teststat.html',
     controller: 'TeststatCtrl',
     controllerAs: 'testStat'
     })
     .when('/personalCenter/myFavorite', {
     templateUrl: 'views/personalCenter/myfavorite.html',
     controller: 'MyfavoriteCtrl',
     controllerAs: 'myFavorite'
     })
     .when('/personalCenter/studyPlan', {
     templateUrl: 'views/personalCenter/studyplan.html',
     controller: 'StudyplanCtrl',
     controllerAs: 'studyPlan'
     })
     .when('/personalCenter/unReadNotice', {
     templateUrl: 'views/personalCenter/unreadnotice.html',
     controller: 'unReadNoticeCtrl',
     controllerAs: 'unReadNotice'
     })
     .when('/personalCenter/modifyPassword', {
     templateUrl: 'views/personalCenter/modifyPassword.html',
     controller: 'modifyPasswordCtrl',
     controllerAs: 'modifyPassword'
     })
     .when('/personalCenter/securitySetting', {
     templateUrl: 'views/personalCenter/securitysetting.html',
     controller: 'securitySettingCtrl',
     controllerAs: 'securitySetting'
     })
     .when('/personalCenter/changeUser', {
     templateUrl: 'views/personalCenter/changeuserinfo.html',
     controller: 'changeUserInfoCtrl',
     controllerAs: 'changeUserInfo'
     })
     .when('/specialTrainingCourse/classDetail/:Id', {
     templateUrl: 'views/specialTrainingCourse/classdetail.html',
     controller: 'classDetailCtrl',
     controllerAs: 'classDetail'
     })
     .when('/specialTrainingCourse/classPlan/:Id', {
     templateUrl: 'views/specialTrainingCourse/classplan.html',
     controller: 'classPlanCtrl',
     controllerAs: 'classPlan'
     })
     .when('/specialTrainingCourse/classStudent/:Id', {
     templateUrl: 'views/specialTrainingCourse/classstudent.html',
     controller: 'classStudentCtrl',
     controllerAs: 'classStudent'
     })
     .when('/specialTrainingCourse/classPaperList/:Id', {
     templateUrl: 'views/specialTrainingCourse/classpaperlist.html',
     controller: 'classPaperListCtrl',
     controllerAs: 'classPaperList'
     })
     .when('/specialTrainingCourse/photoAlbumList/:Id', {
     templateUrl: 'views/specialTrainingCourse/photoalbumlist.html',
     controller: 'photoAlbumListCtrl',
     controllerAs: 'photoAlbumList'
     })
     .when('/specialTrainingCourse/classTopicList/:Id', {
     templateUrl: 'views/specialTrainingCourse/classtopiclist.html',
     controller: 'classTopicListCtrl',
     controllerAs: 'classTopicList'
     })
     .when('/specialTrainingCourse/classCourse/:Id/:Type', {
     templateUrl: 'views/specialTrainingCourse/classcourse.html',
     controller: 'classCourseCtrl',
     controllerAs: 'classCourse'
     })
     .when('/specialTrainingCourse/classNotice/:Id', {
     templateUrl: 'views/specialTrainingCourse/classnotice.html',
     controller: 'classNoticeCtrl',
     controllerAs: 'classNotice'
     })
     .when('/specialTrainingCourse/classExam/:Id', {
     templateUrl: 'views/specialTrainingCourse/classexam.html',
     controller: 'classExamCtrl',
     controllerAs: 'classExam'
     })
     .when('/specialTrainingCourse/classArticleDetail/:Id', {
     templateUrl: 'views/specialTrainingCourse/classarticledetail.html',
     controller: 'classArticleDetailCtrl',
     controllerAs: 'classArticleDetail'
     })
     .when('/specialTrainingCourse/classTopicAdd/:Id', {
     templateUrl: 'views/specialTrainingCourse/classtopicadd.html',
     controller: 'classTopicAddCtrl',
     controllerAs: 'classTopicAdd'
     })
     .when('/specialTrainingCourse/classPaperAdd/:Id', {
     templateUrl: 'views/specialTrainingCourse/classpaperadd.html',
     controller: 'classPaperAddCtrl',
     controllerAs: 'classPaperAdd'
     })
     .when('/specialTrainingCourse/photoAlbumAdd/:Id', {
     templateUrl: 'views/specialTrainingCourse/photoalbumadd.html',
     controller: 'photoAlbumAddCtrl',
     controllerAs: 'photoAlbumAdd'
     })
     .when('/specialTrainingCourse/photoPreview/:AlbumId/:TrainingId', {
     templateUrl: 'views/specialTrainingCourse/photopreview.html',
     controller: 'photoPreviewCtrl',
     controllerAs: 'photoPreview'
     })
     .when('/personalCenter/messageList', {
     templateUrl: 'views/personalCenter/messagelist.html',
     controller: 'MessagelistCtrl',
     controllerAs: 'messageList'
     })
     .when('/personalCenter/messageList/messageDetail/:Id', {
     templateUrl: 'views/personalCenter/messagedetail.html',
     controller: 'MessagedetailCtrl',
     controllerAs: 'messageDetail'
     })
     .when('/exam/exam/:Id', {
     templateUrl: 'views/exam/exam.html',
     controller: 'ExamCtrl',
     controllerAs: 'exam'
     })
     .when('/personalCenter/personaLearningArchives', {
     templateUrl: 'views/personalCenter/personalearningarchives.html',
     controller: 'PersonalearningarchivesCtrl',
     controllerAs: 'personaLearningArchives'
     })
     .when('/exam/examDetailList/:Id', {
     templateUrl: 'views/exam/examdetaillist.html',
     controller: 'ExamdetaillistCtrl',
     controllerAs: 'examDetailList'
     })
     .when('/exam/examReview/:examId/:recordId', {
     templateUrl: 'views/exam/examreview.html',
     controller: 'ExamreviewCtrl',
     controllerAs: 'examReview'
     })
     .when('/play/play/:Id', {
     templateUrl: 'views/play/play.html',
     controller: 'PlayCtrl',
     controllerAs: 'play'
     })
     .when('/personalCenter/forgetPassword', {
     templateUrl: 'views/personalCenter/forgetpassword.html',
     controller: 'ForgetpasswordCtrl',
     controllerAs: 'forgetPassword'
     })
     .when('/rankingList/userRankingList', {
     templateUrl: 'views/rankingList/userrankinglist.html',
     controller: 'UserrankinglistCtrl',
     controllerAs: 'userRankingList'
     })
     .when('/login', {
     templateUrl: 'views/login.html',
     controller: 'LoginCtrl',
     controllerAs: 'login'
     })
     .when('/rankGroup', {
     templateUrl: 'views/rankgroup.html',
     controller: 'RankgroupCtrl',
     controllerAs: 'rankGroup'
     })
     .when('/rankCourseClick', {
     templateUrl: 'views/rankcourseclick.html',
     controller: 'RankcourseclickCtrl',
     controllerAs: 'rankCourseClick'
     })
     .when('/rankCourseFinish', {
     templateUrl: 'views/rankcoursefinish.html',
     controller: 'RankcoursefinishCtrl',
     controllerAs: 'rankCourseFinish'
     })
     .when('/rankLoginSum', {
     templateUrl: 'views/rankloginsum.html',
     controller: 'RankloginsumCtrl',
     controllerAs: 'rankLoginSum'
     })
     .when('/Software', {
     templateUrl: 'views/software.html',
     controller: 'SoftwareCtrl',
     controllerAs: 'Software'
     })
     .when('/originalArticle', {
     templateUrl: 'views/originalarticle.html',
     controller: 'OriginalarticleCtrl',
     controllerAs: 'originalArticle'
     })
     .when('/classList', {
     templateUrl: 'views/classlist.html',
     controller: 'ClasslistCtrl',
     controllerAs: 'classList'
     })
     .when('/pollList', {
     templateUrl: 'views/polllist.html',
     controller: 'PolllistCtrl',
     controllerAs: 'pollList'
     })
     .when('/poll', {
     templateUrl: 'views/poll.html',
     controller: 'PollCtrl',
     controllerAs: 'poll'
     })
     .when('/pollReview', {
     templateUrl: 'views/pollreview.html',
     controller: 'PollreviewCtrl',
     controllerAs: 'pollReview'
     })
     .when('/register', {
     templateUrl: 'views/register.html',
     controller: 'RegisterCtrl',
     controllerAs: 'register'
     })
     .when('/originalArticleList', {
     templateUrl: 'views/originalarticlelist.html',
     controller: 'OriginalarticlelistCtrl',
     controllerAs: 'originalArticleList'
     })
     .when('/library', {
     templateUrl: 'views/library.html',
     controller: 'LibraryCtrl',
     controllerAs: 'library'
     })
     .when('/article', {
     templateUrl: 'views/article.html',
     controller: 'ArticleCtrl',
     controllerAs: 'article'
     })
     .when('/bookDetail', {
     templateUrl: 'views/bookdetail.html',
     controller: 'BookdetailCtrl',
     controllerAs: 'bookDetail'
     })
     .when('/collegeInfo', {
     templateUrl: 'views/collegeinfo.html',
     controller: 'CollegeinfoCtrl',
     controllerAs: 'collegeInfo'
     })
     .when('/studentStyle', {
     templateUrl: 'views/studentstyle.html',
     controller: 'StudentstyleCtrl',
     controllerAs: 'studentStyle'
     })
     .when('/studentStyleDetail', {
     templateUrl: 'views/studentstyledetail.html',
     controller: 'StudentstyledetailCtrl',
     controllerAs: 'studentStyleDetail'
     })
     .when('/resultShow', {
     templateUrl: 'views/resultshow.html',
     controller: 'ResultshowCtrl',
     controllerAs: 'resultShow'
     })
     .when('/bookChapter', {
     templateUrl: 'views/bookchapter.html',
     controller: 'BookchapterCtrl',
     controllerAs: 'bookChapter'
     })
     .when('/bookChapterContent', {
     templateUrl: 'views/bookchaptercontent.html',
     controller: 'BookchaptercontentCtrl',
     controllerAs: 'bookChapterContent'
     })
     .when('/specialLearning', {
     templateUrl: 'views/speciallearning.html',
     controller: 'SpeciallearningCtrl',
     controllerAs: 'specialLearning'
     })
     .when('/courseCenterBuy', {
     templateUrl: 'views/coursecenterbuy.html',
     controller: 'CoursecenterbuyCtrl',
     controllerAs: 'courseCenterBuy'
     })
     .when('/shoppingCart', {
     templateUrl: 'views/shoppingcart.html',
     controller: 'ShoppingcartCtrl',
     controllerAs: 'shoppingCart'
     })
     .when('/orderDetailList', {
     templateUrl: 'views/orderdetaillist.html',
     controller: 'OrderdetaillistCtrl',
     controllerAs: 'orderDetailList'
     })
     .when('/payConfirm', {
     templateUrl: 'views/payconfirm.html',
     controller: 'PayconfirmCtrl',
     controllerAs: 'payConfirm'
     })
     .when('/orderConfirm', {
     templateUrl: 'views/orderconfirm.html',
     controller: 'OrderconfirmCtrl',
     controllerAs: 'orderConfirm'
     })
     .when('/orderList', {
     templateUrl: 'views/orderlist.html',
     controller: 'OrderlistCtrl',
     controllerAs: 'orderList'
     })
     .when('/invoiceList', {
     templateUrl: 'views/invoicelist.html',
     controller: 'InvoicelistCtrl',
     controllerAs: 'invoiceList'
     })
     .when('/applyInvoice', {
     templateUrl: 'views/applyinvoice.html',
     controller: 'ApplyinvoiceCtrl',
     controllerAs: 'applyInvoice'
     })
     .when('/tryPlay', {
     templateUrl: 'views/tryplay.html',
     controller: 'TryplayCtrl',
     controllerAs: 'tryPlay'
     })
     .when('/specialLearningOne', {
     templateUrl: 'views/speciallearningone.html',
     controller: 'SpeciallearningoneCtrl',
     controllerAs: 'specialLearningOne'
     })
     .when('/trainingClass', {
     templateUrl: 'views/trainingclass.html',
     controller: 'TrainingclassCtrl',
     controllerAs: 'trainingClass'
     })
     .when('/noticeList', {
     templateUrl: 'views/noticelist.html',
     controller: 'NoticelistCtrl',
     controllerAs: 'noticeList'
     })
     .when('/error', {
       templateUrl: 'views/error.html',
       controller: 'ErrorCtrl',
       controllerAs: 'error'
     })
     .otherwise({
     redirectTo: '/main'
     });*/
    
    $httpProvider.defaults.headers.post = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    };
    $httpProvider.defaults.withCredentials = true;
  })
  .run(function ($rootScope, $location, $http, $state, $loading) {
    /* 监听路由的状态变化 */
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      
      $rootScope.rememberName = toState.name;
      $rootScope.rememberParams = JSON.stringify(toParams);
      if (toState.name == 'main')return;// 首页
      if (toState.name == 'main2')return;// 首页
      if (toState.name == 'userLogin')return;// 登录界面
      if (toState.name == 'userRegister')return;// 注册界面
      if (toState.name == 'forgetPassword')return;//忘记密码
      
      $.ajax({
        type: "POST",
        async: false,
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        url: ALL_PORT.Authorization.url,
        data: $.extend({}, ALL_PORT.Authorization.data),
        success: function (data) {
          if (data.isauth == true) {
          } else {
            if (data.Type == 3) {
              alert("在其他设备上已经登录");
              event.preventDefault();
              $state.go('userLogin', {name: $rootScope.rememberName, params: $rootScope.rememberParams});
            }
            else if (data.Type == 9) {
              alert("在其他平台登录或被其他人登录");
              event.preventDefault();
              $state.go('userLogin', {name: $rootScope.rememberName, params: $rootScope.rememberParams});
            }
            else if (data.Type == 10) {
              alert("您还不是本平台会员，将前往您所在的平台" + ":" + data.Message);
              // document.location = "http://" + data.Message;
              window.open("http://" + data.Message,"_blank");
            }
            else if (data.Type == 11) {
              alert("过期了");
              event.preventDefault();
              $state.go('userLogin', {name: $rootScope.rememberName, params: $rootScope.rememberParams});
            }
            else if (data.Type == 13) {
              event.preventDefault();
              alert(data.Message);
              $state.go('userLogin', {name: $rootScope.rememberName, params: $rootScope.rememberParams});
            }
            else if (data.Type == 15) {
              alert(data.Type + ":" + data.Message);
            }
            else {
              alert("请登录！");
              event.preventDefault();
              $state.go('userLogin', {name: $rootScope.rememberName, params: $rootScope.rememberParams});
            }
          }
        },
        error: function () {
          alert("服务器出错！请等待！");
          event.preventDefault();
          $state.go('main');
        }
      });
      
    });
    /* 路由状态变化成功 */
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $rootScope.pageTitle = $state.current.data.title;
      //保持在线
      setInterval(function () {
        $http({
          method: 'GET',
          url: ALL_PORT.KeepOnline.url
        }).success(function (response) {
        });
      }, 60000);
      $loading.setDefaultOptions({
        text: '',
      });
    });
    
    //当视图开始加载，DOM渲染完成之前触发
    $rootScope.$on('$viewContentLoading', function (event, viewConfig) {
      if (!!$state.current.data) {
        $rootScope.pageTitle = $state.current.data.title;
      } else {
        $rootScope.pageTitle = '干部教育网络学院';
      }
    });
    
    /*//当视图加载完成，DOM渲染完成之后触发
     $rootScope.$on('$viewContentLoaded',function(event, viewConfig){
     // console.log(event,viewConfig);
     
     });*/
  });
