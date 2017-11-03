"user strict"
//请求后台数据入口
// var API_URL = "/api";
var API_URL = "http://test11.jy365.net/api";
// var API_URL = "http://122.225.101.117:9090/api";
// var API_URL = "http://192.168.1.25:9090/api2";
var API_URL_ADMIN = API_URL + "/admin";
//限制多次请求
var limitTime = 0;
// jQuery.support.cors=true;
//响应数据变量
var responseData = 'ListData';
var NAVISOBJ = false;
var IMPORT = {
  userimportfields: "用户导入模板.xls",
  courseimportfields: "课程导入模板.xls",
  examimportlist: "试题导入模板.xls",
  traininguserimportlist: "培训班用户导入模板.xls",
  groupimportfieldlist: "单位导入模板.xls",
  coursenodeimportlist: "课程节点导入模板.xls",
  pointfieldimport: "字段导入模版",
  a: "用户排行设置导入模板.xls",
  courseurlimport: "课程地址模版.xls"
};
/*var BROSWER = (function () {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
  var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
  var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
  if (isIE) {
    var IE5 = IE55 = IE6 = IE7 = IE8 = false;
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    IE55 = fIEVersion == 5.5;
    IE6 = fIEVersion == 6.0;
    IE7 = fIEVersion == 7.0;
    IE8 = fIEVersion == 8.0;
    if (IE55) {
      return "IE55";
    }
    if (IE6) {
      return "IE6";
    }
    if (IE7) {
      return "IE7";
    }
    if (IE8) {
      return "IE8";
    }
    return "IE";
  }//isIE end
  if (isFF) {
    return "FF";
  }
  if (isOpera) {
    return "Opera";
  }
  return "Other";
})();*/
var changeTheme = function(themeFile) {
  document.getElementById('global-css').setAttribute("href", "styles/"+themeFile+".css");
}
var ORIGIN = (function () {
  var origin = window.origin;
  var plate = "hunan";
  if(origin === "http://localhost:9000"){
    plate="hunan";
    // changeTheme(themeFile);
  }else {
    plate="changsha";
  }
  return plate;
  // changeTheme(themeFile);
})();
/**
 * 加密
 */
String.prototype.rsaEnscrypt = function (publicKey) {
  if (!publicKey) {
    publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCa4KHNwDX44gGmmIAtRu4gjVYtGWZzcm4t+1wjUD4dn7fMLPvuK7ai4UrfDeEJE1RPwudJw+lJ6crql8wSIg7/DbTlG3ihsCT6dT9H5B9OoeR7K9VWUesaW/iyVL6HXiYOANabW14pvJATDmdq91Tfgp6PSQyvdfiRdV4r07crpQIDAQAB";
  }
  var rsaProvider = new JSEncrypt();
  rsaProvider.setPublicKey(publicKey);
  var strEncrypt = rsaProvider.encrypt(this.replace(/\+/g, '%2B'));
  return strEncrypt;
};
$.ajaxSetup({
  contentType: "application/x-www-form-urlencoded;charset=UTF-8",
  xhrFields: {
    withCredentials: true
  }
});
//ueditor配置
var ueditorConfig = {
  //这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
  toolbars: [
    ['fullscreen', 'source', '|', 'undo', 'redo', '|', 'bold',
      'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript',
      'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|',
      'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall',
      'cleardoc', '|', 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|', 'customstyle',
      'paragraph', 'fontfamily', 'fontsize', '|', 'directionalityltr', 'directionalityrtl',
      'indent', '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
      'touppercase', 'tolowercase', '|', 'link', 'unlink', 'anchor', '|', 'imagenone',
      'imageleft', 'imageright', 'imagecenter', '|', 'simpleupload', 'insertimage',
      'pagebreak', '|', 'horizontal', 'date', 'time', 'spechars', '|',
      'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow',
      'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells',
      'splittorows', 'splittocols', 'charts', '|', 'preview', 'print', 'searchreplace', 'drafts',
      'insertcode', 'template', 'background'
    ]
  ],
  autoHeightEnabled: false,
  elementPathEnabled: false, //元素路径
  initialContent: '',
  focus: false,
  indentValue: '2em',
  initialFrameWidth: 1000, //初始化编辑器宽度,默认1000
  initialFrameHeight: 320, //初始化编辑器高度,默认320
  readonly: false, //编辑器初始化结束后,编辑区域是否是只读的，默认是false
  enableAutoSave: true, //启用自动保存
  saveInterval: 500, //自动保存间隔时间， 单位ms
  fullscreen: false, //是否开启初始化时即全屏，默认关闭
  imagePopup: true, //图片操作的浮层开关，默认打开
  allHtmlEnabled: false //提交到后台的数据是否包含整个html字符串
};

//分页配置
var paginationConf = {
  currentPage: 1, //当前页
  totalItems: 0, //数据总数
  itemsPerPage: 12, //每页显示的条数
  pagesLength: 6,
  perPageOptions: [10, 20, 30, 40, 50],
};
//所有接口
var ALL_PORT = {
  //判断能否访问页面接口
  Authorization: {
    url: API_URL + "/Page/Authorization",
    data: {}
  },
  //保持在线
  KeepOnline: {
    url: API_URL + "/Page/KeepOnline"
  },
  //文章分类
  ArticleCategory: {
    url: API_URL + "/Page/ArticleCategory",
    data: {titleNav: '文章分类', sort: 'Sort', order: 'desc'}
  },
  //文章
  ArticleList: {
    url: API_URL + "/Page/ArticleList",
    data: {page: '1', rows: '7', sort: 'Sort', order: 'desc', wordLimt: '20', CategoryCode: '', categoryId: ''}
  },
  //文章内容
  ArticleContent: {
    url: API_URL + "/Page/ArticleContent",
    data: {}
  },
  //搜索全部新闻
  SearchAll: {
    url: API_URL + "/Page/SearchAll",
    data: {page: 1, rows: 15, key: ''}
  },
  //通知公告
  noticeAnnouncement: {
    url: API_URL + "/Page/LeftNotice",
    data: {page: '1', rows: '4', sort: 'Sort', order: 'desc', wordLimt: '15'}
  },
  //通告公告列表
  NoticeList: {
    url: API_URL + "/Page/NoticeList",
    data: {page: '1', rows: '10', sort: 'Id', order: 'desc', categoryId: 0, titleNav: '通告公告', wordLimt: '35'}
  },
  //通知内容
  noticeContent: {
    url: API_URL + "/Page/NoticeContent",
    data: {Id: '', titleNav: '通知内容'}
  },
  //友情链接
  Blogroll: {
    url: API_URL + "/Page/Blogroll",
    data: {}
  },
  //培训课程
  TrainingClass: {
    url: API_URL + "/Page/TrainingClass",
    data: {sort: 'Id', order: 'desc'}
  },
  //请求用户信息
  LoginShort: {
    url: API_URL + "/Page/LoginShort",
    data: {}
  },
  //防伪造请求
  AntiForgeryToken: {
    url: API_URL + "/Page/AntiForgeryToken",
    data: {}
  },
  //用户退出
  LoginOut: {
    url: API_URL + "/Page/LoginOut",
    data: {}
  },
  //踢出其他地方登录账号
  KickOut: {
    url: API_URL + "/Page/KickOut",
    data: {}
  },
  //点击登陆（记住密码）
  LoginMe: {
    url: API_URL + "/Page/LoginMe",
    data: {}
  },
  //点击登陆（没有记住密码）
  LoginCode: {
    url: API_URL + "/Page/LoginCode",
    data: {}
  },
  //登陆页面登录（验证码）
  Login: {
    url: API_URL + "/Page/Login",
    data: {}
  },
  //获取验证码
  GetVerifyCode: {
    url: API_URL + "/common/GetVerifyCode",
    data: {}
  },
  //记住密码
  GetLoginName: {
    url: API_URL + "/Page/GetLoginName",
    data: {}
  },
  //单位排行
  LeftGroupRank: {
    url: API_URL + "/Page/LeftGroupRank",
    data: {page: 1, rows: 10, sort: "AvgCredit", order: "desc", titleNav: '单位排行', wordLimt: 9}
  },
  //单位排行详情
  RankGroupList: {
    url: API_URL + "/Page/RankGroupList",
    data: {page: 1, rows: 15, sort: "AvgCredit", order: "desc", titleNav: '单位排行', wordLimt: 30}
  },
  //实时数据
  LeftRealTimeData: {
    url: API_URL + "/Page/LeftRealTimeData",
    data: {}
  },
  //用户素质维度
  GetUserSkill: {
    url: API_URL + "/Guid/GetUserSkill",
    data: {}
  },
  //课程分类
  CourseCategory: {
    url: API_URL + "/Page/CourseCategory",
    data: {titleNav: "课程分类", sort: 'Sort', order: 'Desc'}
  },
  //推荐课程
  RecommendCourse: {
    url: API_URL + "/Guid/RecommendCourse",
    data: {page: 1, rows: 10}
  },
  //相关课程
  RelatedCourse: {
    url: API_URL + "/Guid/RelatedCourse",
    data: {Page: 1, Rows: 6, CourseId: ''}
  },
  //课程列表
  CourseList: {
    url: API_URL + "/Page/CourseList",
    data: {
      page: 1,
      rows: 10,
      sort: 'Sort',
      order: 'desc',
      courseType: 'All',
      channelId: '',
      channelCode: '',
      title: '',
      titleNav: '课程中心',
      wordLimt: 35,
      teacher: ''
    }
  },
  //课程点击排行
  CourseClickRank: {
    url: API_URL + "/Page/CourseClickRank",
    data: {
      page: 1,
      rows: 19,
      sort: 'ClickCount',
      order: 'desc',
      courseType: 'All',
      flag: 'All',
      titleNav: '课程排行',
      wordLimt: 35
    }
  },
  //课程点击排行详细页
  CourseClickList: {
    url: API_URL + "/Page/CourseClickList",
    data: {page: 1, rows: 20, sort: 'ClickCount', order: 'desc', titleNav: '课程点击排行', wordLimt: 17}
  },
  //登录次数排行
  LoginSumRank: {
    url: API_URL + "/Page/LoginSumRank",
    data: {page: 1, rows: 10, sort: 'LoginTimes', order: 'desc', titleNav: '登录次数排行', wordLimt: 6}
  },
  //登录次数排行详细页
  LoginSumList: {
    url: API_URL + "/Page/LoginSumList",
    data: {page: 1, rows: 15, sort: 'LoginTimes', order: 'desc', titleNav: '登录次数排行'}
  },
  //批量选课
  AddStudyCourse: {
    url: API_URL + "/Page/AddStudyCourse",
    data: {checkValue: ''}
  },
  //个人中心个人信息
  LoginLong: {
    url: API_URL + "/Page/LoginLong",
    data: {}
  },
  //学员学时排行
  LeftUserRank: {
    url: API_URL + "/Page/LeftUserRank",
    data: {page: 1, rows: 10, sort: 'TotalCredit', order: 'desc', titleNav: "个人排行", wordLimt: 6}
  },
  //个人排行
  RankUserList: {
    url: API_URL + "/Page/RankUserList",
    data: {page: 1, rows: 15, sort: 'TotalCredit', order: 'desc', titleNav: "个人排行"}
  },
  //课程完成排行
  CourseFinishList: {
    url: API_URL + "/Page/CourseFinishList",
    data: {page: 1, rows: 15, sort: 'FinishCourseCount', order: 'desc', titleNav: "课程完成排行", wordLimt: 8}
  },
  //个人中心课程
  MyCenter: {
    url: API_URL + "/Page/MyCenter",
    data: {page: 1, rows: 10, sort: 'BrowseScore', order: 'desc', titleNav: "个人中心", courseType: "Unfinish", title: ""}
  },
  //考试中心列表
  ExamList: {
    url: API_URL + "/Page/ExamList",
    data: {page: 1, rows: 5, sort: 'Id', order: 'desc', titleNav: "在线考试", examType: "All", title: ""}
  },
  //问卷调查列表
  PollList: {
    url: API_URL + "/Page/PollList",
    data: {
      page: 1,
      rows: 10,
      sort: 'Id',
      order: 'desc',
      titleNav: "问卷调查",
      examType: "All",
      title: "",
      trainingId: "",
      wordLimt: 30
    }
  },
  //参加问卷调查
  Poll: {
    url: API_URL + "/Exam/Poll",
    data: {parameter1: ''}
  },
  //问卷调查结果
  PollReview: {
    url: API_URL + "/Exam/PollReview",
    data: {parameter1: '', parameter2: ''}
  },
  //培训班分类
  GetTrainingClassTypeList: {
    url: API_URL + "/Page/GetTrainingClassTypeList",
    data: {titleNav: "培训班分类", sort: 'Sort', order: 'Desc'}
  },
  //专题学习
  StudySpecial: {
    url: API_URL + "/Page/StudySpecial",
    data: {titleNav: "专题学习", sort: 'Sort', order: 'Desc'}
  },
  //我的班级
  ClassMy: {
    url: API_URL + "/Page/ClassMy",
    data: {page: 1, rows: 7, sort: 'Id', order: 'desc', titleNav: "我的班级", title: ""}
  },
  //活跃班级
  ClassActive: {
    url: API_URL + "/Page/ClassActive",
    data: {page: 1, rows: 7, sort: 'CurrentUser', order: 'desc', titleNav: "活跃班级"}
  },
  //近期班级
  ClassRecent: {
    url: API_URL + "/Page/ClassRecent",
    data: {page: 1, rows: 10, sort: 'StartDate', order: 'desc', titleNav: "近期班级"}
  },
  //获取培训列表
  GetClassList: {
    url: API_URL + "/Page/GetClassList",
    data: {page: 1, rows: 10, sort: 'Id', order: 'desc', title: "", type: "just", categoryId: 0}
  },
  //我的班级（type："my" 我的班级 type："recent" 近期班级 type："active" 活跃班级）
  ClassList: {
    url: API_URL + "/Page/ClassList",
    data: {page: 1, rows: 20, sort: 'Id', order: 'desc', title: "", type: "", wordLimt: 30}
  },
  //课程详情
  CourseContent: {
    url: API_URL + "/Page/CourseContent",
    data: {Id: '', titleNav: '课程详情'}
  },
  //学习统计
  MyStudyStat: {
    url: API_URL + "/Page/MyStudyStat",
    data: {page: 1, rows: 10, sort: 'Id', order: 'desc', titleNav: '学习统计'}
  },
  //考试统计
  MyExamStat: {
    url: API_URL + "/Page/MyExamStat",
    data: {page: 1, rows: 10, sort: 'Id', order: 'desc', titleNav: '考试统计'}
  },
  //我的收藏
  MyFavorite: {
    url: API_URL + "/Page/MyFavorite",
    data: {page: 1, rows: 10, sort: 'Id', order: 'desc', titleNav: '我的收藏'}
  },
  //收藏
  FavoriteAdd: {
    url: API_URL + "/Page/FavoriteAdd",
    data: {mainId: '', type: '', title: '', remark: ''}
  },
  //取消收藏
  FavoriteDelete: {
    url: API_URL + "/Page/FavoriteDelete",
    data: {id: ''}
  },
  //学习计划
  MyStudyPlan: {
    url: API_URL + "/Page/MyStudyPlan",
    data: {page: 1, rows: 10, sort: 'Id', order: 'desc', titleNav: '学习计划'}
  },
  //获取笔记
  NoteAdd: {
    url: API_URL + "/Home/NoteAdd",
    data: {courseId: ''}
  },
  //添加笔记
  AddNote: {
    url: API_URL + "/Page/AddNote",
    data: {Name: '', Content: '', CourseId: ''}
  },
  //笔记列表
  CourseNoteList: {
    url: API_URL + "/Page/CourseNoteList",
    data: {CourseId: ''}
  },
  //编辑笔记
  NoteUpdate: {
    url: API_URL + "/Page/NoteUpdate",
    data: {}
  },
  //删除笔记
  DelNote: {
    url: API_URL + "/Page/DelNote",
    data: {Id: ''}
  },
  
  //添加计划
  StudyPlanAdd: {
    url: API_URL + "/Home/StudyPlanAdd",
    data: {courseId: ''}
  },
  //添加计划提交
  AddStudyPlan: {
    url: API_URL + "/Page/StudyPlanAdd",
    data: {PlanFinishDate: '', RemindDate: '', RemindCycle: '', Remark: '', CourseId: ''}
  },
  //查看计划
  StudyPlanUpdate: {
    url: API_URL + "/Home/StudyPlanUpdate",
    data: {courseId: ''}
  },
  //提交修改计划
  EditStudyPlanUpdate: {
    url: API_URL + "/Page/StudyPlanUpdate",
    data: {PlanFinishDate: '', RemindDate: '', RemindCycle: '', Remark: '', CourseId: '', Id: ''}
  },
  //删除课程
  DelUserCourseReg: {
    url: API_URL + "/Page/DelUserCourseReg",
    data: {courseId: ''}
  },
  //考试查看
  CourseExamList: {
    url: API_URL + "/Page/CourseExamList",
    data: {courseId: ''}
  },
  //删除学习计划
  DelStudyPlan: {
    url: API_URL + "/Page/DelStudyPlan",
    data: {id: ''}
  },
  //留言板
  MessageList: {
    url: API_URL + "/Page/MessageList",
    data: {page: 1, rows: 13, sort: 'CreateDate', order: 'desc', titleNav: '留言板', wordLimt: '35'}
  },
  //留言信息详情
  MessageDetail: {
    url: API_URL + "/Page/MessageDetail",
    data: {id: '', titleNav: '留言详情'}
  },
  //提交添加留言
  GetMessageAdd: {
    url: API_URL + "/Page/GetMessageAdd",
    data: {Name: '', Class: '', Content: ''}
  },
  //考试题
  Exam: {
    url: API_URL + "/Exam/Exam",
    data: {parameter1: ''}
  },
  //个人学习档案
  StudyStatistics: {
    url: API_URL + "/Page/StudyStatistics",
    data: {
      page: 1,
      rows: 5,
      sort: 'Id',
      order: 'desc',
      type: '',
      startDate: '',
      endDate: '',
      wordLimt: 24,
      titleNav: '个人学习档案'
    }
  },
  //考试详情
  ExamDetailListItem: {
    url: API_URL + "/Exam/ExamDetailListItem",
    data: {page: 1, rows: 10, sort: 'Id', order: 'desc', examid: ''}
  },
  //考试记录详情
  ExamReview: {
    url: API_URL + "/Exam/ExamReview",
    data: {parameter1: '', parameter2: ''}
  },
  //报名培训班
  UpdateTrainingStudentup: {
    url: API_URL + "/Guid/UpdateTrainingStudentup",
    data: {Id: ''}
  },
  //取消报名培训班
  UpdateTrainingStudentdown: {
    url: API_URL + "/Guid/UpdateTrainingStudentdown",
    data: {Id: ''}
  },
  //未读通知
  UnReadNotice: {
    url: API_URL + "/Page/NoticeUnReadList",
    data: {page: 1, rows: 7, sort: 'Id', order: 'desc', titleNav: '个人通知', wordLimt: 30}
  },
  //修改密码
  UpdatePwd: {
    url: API_URL + "/Page/UpdatePwd",
    data: {}
  },
  //设置密保--密码验证
  SetPasswordQuestion: {
    url: API_URL + "/Page/SetPasswordQuestion",
    data: {}
  },
  //设置密保--添加密保问题
  AddPasswordQuestion: {
    url: API_URL + "/Page/AddPasswordQuestion",
    data: {pwd: ''}
  },
  //修改信息--获取用户详细信息
  GetUserInfo: {
    url: API_URL + "/Page/GetUserInfo",
    data: {titleNav: '修改信息'}
  },
  //修改信息--获取职位分类
  GetGradeList: {
    url: API_URL + "/Common/GetGradeList",
    data: {}
  },
  //修改用户信息
  UpdateUserInfo: {
    url: API_URL + "/Page/UpdateUserInfo",
    data: {}
  },
  //专题培训班--个人学习信息
  ClassInformation: {
    url: API_URL + "/Page/ClassInformation",
    data: {titleNav: '个人学习信息', Id: ''}
  },
  //专题培训班--班级详情
  ClassDetail: {
    url: API_URL + "/Page/ClassDetail",
    data: {titleNav: '培训班详情', page: 1, rows: 9, sort: 'Id', order: 'desc'}
  },
  //专题培训班--教学计划
  ClassPlan: {
    url: API_URL + "/Page/ClassPlan",
    data: {titleNav: '教学计划'}
  },
  //专题培训班--同学名录
  ClassStudent: {
    url: API_URL + "/Page/ClassStudent",
    data: {page: 1, rows: 12, sort: 'Id', order: 'desc', titleNav: '同学名录'}
  },
  //专题培训班--我的论文
  ClassPaperList: {
    url: API_URL + "/Page/ClassPaperList",
    data: {page: 1, rows: 12, sort: 'Id', order: 'desc', titleNav: '班级论文', wordLimt: 30}
  },
  //专题培训班--班级相册
  PhotoAlbumList: {
    url: API_URL + "/Page/PhotoAlbumList",
    data: {page: 1, rows: 9, sort: 'Id', order: 'desc', titleNav: '班级相册'}
  },
  //专题培训班--班级话题
  ClassTopicList: {
    url: API_URL + "/Page/ClassTopicList",
    data: {page: 1, rows: 12, sort: 'Id', order: 'desc', titleNav: '班级话题', wordLimt: 30}
  },
  //专题培训班--班级课程
  ClassCourse: {
    url: API_URL + "/Page/ClassCourse",
    data: {page: 1, rows: 12, sort: 'Id', order: 'desc', titleNav: '班级课程', wordLimt: 30}
  },
  //专题培训班--班级公告
  ClassNoticeList: {
    url: API_URL + "/Page/ClassNoticeList",
    data: {page: 1, rows: 12, sort: 'Id', order: 'desc', titleNav: '班级公告', wordLimt: 30}
  },
  //专题培训班--班级考试
  ClassExam: {
    url: API_URL + "/Page/ClassExam",
    data: {page: 1, rows: 12, sort: 'Id', order: 'desc', titleNav: '班级考试', wordLimt: 30}
  },
  //专题培训班--班级文章内容
  ClassArticleDetail: {
    url: API_URL + "/Page/ClassArticleDetail",
    data: {}
  },
  //专题培训班--查看用户权限
  CheckUserClass: {
    url: API_URL + "/Page/CheckUserClass",
    data: {}
  },
  //专题培训班--添加相册
  GetPhotoAlbumAdd: {
    url: API_URL + "/Page/GetPhotoAlbumAdd",
    data: {}
  },
  //专题培训班--添加相册
  PhotoAlbumAdd: {
    url: API_URL + "/Page/PhotoAlbumAdd",
    data: {titleNav: '添加相册'}
  },
  //专题培训班--班级照片
  PhotoPreview: {
    url: API_URL + "/Page/PhotoPreview",
    data: {titleNav: '班级图片', page: 1, rows: 9, sort: 'Id', order: 'desc'}
  },
  //专题培训班--班级照片
  GetPhotoUpFile: {
    url: API_URL + "/Page/GetPhotoUpFile",
    data: {}
  },
  //专题培训班--添加话题
  ClassTopicAdd: {
    url: API_URL + "/Page/ClassTopicAdd",
    data: {page: 1, rows: 9, sort: 'Id', order: 'desc'}
  },
  //专题培训班--添加论文
  ClassPaperAdd: {
    url: API_URL + "/Page/ClassPaperAdd",
    data: {page: 1, rows: 9, sort: 'Id', order: 'desc'}
  },
  //原创文章添加（发表心声）
  AddOriginalArticle: {
    url: API_URL + "/Page/AddOriginalArticle",
    data: {Name: '', Content: ''}
  },
  //原创文章列表(学员心声)
  OriginalArticleList: {
    url: API_URL + "/Page/OriginalArticleList",
    data: {page: 1, rows: 9, sort: 'Id', order: 'desc', titleNav: '学员心声列表'}
  },
  //专题培训班--获取分类
  GetTrainingArticleCategory: {
    url: API_URL + "/Page/GetTrainingArticleCategory",
    data: {}
  },
  //专题培训班--发布文章
  ClassPublishArticle: {
    url: API_URL + "/Page/ClassPublishArticle",
    data: {}
  },
  //考试中心--提交考试  问卷提交
  PostExam: {
    url: API_URL + "/Exam/PostExam",
    data: {}
  },
  //邮箱找回密码
  GetPasswordEmail: {
    url: API_URL + "/Page/GetPasswordEmail",
    data: {}
  },
  //获取密保
  GetQuestion: {
    url: API_URL + "/Page/GetQuestion",
    data: {account: ''}
  },
  //注册
  Register: {
    url: API_URL + "/Page/Register",
    data: {account: '', name: '', password: '', mobile: '', idcard: '', email: '', groupid: '', smgcode: ''}
  },
  //获取单位（注册）
  GetGroupList: {
    url: API_URL + "/common/GetGroupList",
    data: {id: ''}
  },
  //发送验证码
  SendMsg: {
    url: API_URL + "/Page/SendMsg",
    data: {mobileNo: ''}
  },
  //提交问题
  GetPasswordByQuestion: {
    url: API_URL + "/Page/GetPasswordByQuestion",
    data: {account: '', question: '', answer: ''}
  },
  //提示未读通知
  UnReadNotice2: {
    url: API_URL + "/Page/UnReadNotice",
    data: {}
  },
  //播放信息
  Play: {
    url: API_URL + "/Home/Play",
    data: {id: ''}
  },
  //刷新播放进度
  Refresh: {
    url: API_URL + "/CourseProcess/Refresh",
    data: {PortalId: '', userId: '', courseid: ''}
  },
  //添加评论
  CourseCommentAdd: {
    url: API_URL + "/Page/CourseCommentAdd",
    data: {mainId: '', parentId: '0', content: '', rate: ''}
  },
  //获取评论
  CourseComment: {
    url: API_URL + "/Page/CourseComment",
    data: {id: '', page: '1', rows: '100', sort: 'Id', order: 'Desc'}
  },
  //获取评论
  Refresh: {
    url: API_URL + "/CourseProcess/Refresh",
    data: {PortalId: '', userId: '', courseid: ''}
  },
  //播放前调用
  ClearPlayingCourse: {
    url: API_URL + "/Page/ClearPlayingCourse",
    data: {userid: ''}
  },
  //播放plYjwplay
  PlayJwplay: {
    url: API_URL + "/Home/PlayJwplay",
    data: {courseid: ''}
  },
  //单视频播放进度
  SingleProcess: {
    url: API_URL + "/CourseProcess/SingleProcess",
    data: {PortalId: '', userid: '', courseid: '', positionen: ''}
  },
  //播放精英视频
  PlayJY: {
    url: API_URL + "/Home/PlayJY",
    data: {courseId: ''}
  },
  //播放Scorm视频
  PlayScorm: {
    url: API_URL + "/Home/PlayScorm",
    data: {courseId: ''}
  },
  //播放Single视频
  PlaySingle: {
    url: API_URL + "/Home/PlaySingle",
    data: {courseId: ''}
  },
  //播放PlayOffice视频
  PlayOffice: {
    url: API_URL + "/Home/PlayOffice",
    data: {courseId: ''}
  },
  //PlayOffice视频进度提交
  ProcessOffice: {
    url: API_URL + "/CourseProcess/ProcessOffice",
    data: {course_id: '', lesson_id: '', user_id: '', total_id: ''}
  },
  //图书分类
  BookCategory: {
    url: API_URL + "/Page/BookCategory",
    data: {sort: 'Sort', categoryId: 0, titleNav: '图书分类'}
  },
  //图书分类搜索
  BookList: {
    url: API_URL + "/Page/BookList",
    data: {
      page: 1,
      rows: 8,
      sort: 'Sort',
      order: 'asc',
      categoryId: '',
      titleNav: '电子书',
      wordLimt: 35,
      ptitle: '',
      title: ''
    }
  },
  //图书详情内容
  BookContent: {
    url: API_URL + "/Page/BookContent",
    data: {page: 1, rows: 8, sort: 'Sort', order: 'asc', id: '', titleNav: '图书详细', wordLimt: 35}
  },
  //图书章节
  BookChapterList: {
    url: API_URL + "/Page/BookChapterList",
    data: {page: 1, rows: 8, sort: 'Sort', order: 'asc', bookId: '', titleNav: '图书章节'}
  },
  //图书章节内容
  BookChapterContent: {
    url: API_URL + "/Page/BookChapterContent",
    data: {Id: ''}
  },
  //添加图书评论
  BookCommentAdd: {
    url: API_URL + "/Page/BookCommentAdd",
    data: {bookId: '', content: ''}
  },
  //获取图书评论
  BookCommentList: {
    url: API_URL + "/Page/BookCommentList",
    data: {page: 1, rows: 4, sort: 'Sort', order: 'desc', bookId: '', titleNav: '图书评论', wordLimt: 35}
  },
  //学院概况
  CollegeInfo: {
    url: API_URL + "/page/CollegeInfo",
    data: {sort: 'Sort'}
  },
  //学员风采
  StudentStyle: {
    url: API_URL + "/Page/StudentStyle",
    data: {page: 1, rows: 9, sort: 'Sort', order: 'desc', titleNav: '学员风采'}
  },
  //查看购物车
  GetMyShoppingCart: {
    url: API_URL + "/shop/GetMyShoppingCart",
    data: {}
  },
  //添加课程到购物车
  AddCourseToCart: {
    url: API_URL + "/shop/AddCourseToCart",
    data: {courseid: ''}
  },
  //购物车中删除
  DelCourseFromCart: {
    url: API_URL + "/shop/DelCourseFromCart",
    data: {courseid: ''}
  },
  //生成订单
  AddOrder: {
    url: API_URL + "/shop/AddOrder",
    data: {}
  },
  //删除订单
  DelOrder: {
    url: API_URL + "/shop/DelOrder",
    data: {orderId: ''}
  },
  //取消订单
  CancelOrder: {
    url: API_URL + "/shop/CancelOrder",
    data: {orderId: ''}
  },
  //再次购买
  RestoreOrder: {
    url: API_URL + "/shop/RestoreOrder",
    data: {orderId: ''}
  },
  //订单列表
  GetMyOrder: {
    url: API_URL + "/shop/GetMyOrder",
    data: {page: 1, rows: 4, sort: 'CreateTime', order: 'desc', titleNav: '我的订单'}
  },
  //订单详细
  GetOrderDetail: {
    url: API_URL + "/shop/GetOrderDetail",
    data: {page: 1, rows: 5, sort: 'Sort', order: 'desc', titleNav: '订单详细', orderId: ''}
  },
  //确认支付（用于生成票据）
  InvoiceBeginPay: {
    url: API_URL + "/shop/InvoiceBeginPay",
    data: {orderId: '', payType: ''}
  },
  //获取票据
  GetInvoice: {
    url: API_URL + "/shop/GetInvoice",
    data: {invoiceId: ''}
  },
  //最终确认支付
  InvoiceFinishPay: {
    url: API_URL + "/shop/InvoiceFinishPay",
    data: {invoiceId: '', payCode: ''}
  },
  //支付宝支付接口
  PayForInvoice: {
    url: API_URL + "/shop/PayForInvoice",
    data: {invoiceId: ''}
  },
  //添加班级说说
  AddTrainingSay: {
    url: API_URL + "/page/AddTrainingSay",
    data: {mainId: 0, parentId: 0, content: ""}
  },
  //删除班级说说
  DelTrainingSay: {
    url: API_URL + "/page/DelTrainingSay",
    data: {id: ''}
  },
  //获取班级说说列表
  TrainingSayList: {
    url: API_URL + "/page/TrainingSayList",
    data: {mainId: "", sort: "sort", order: "desc", page: 1, rows: 5}
  },
};
