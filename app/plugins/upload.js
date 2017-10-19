/**
 controlName 控件ID
 types 1.图片Image 2.附件Attachment
 method 1.上传后直接提交 2.点击按钮提交
 */

function originSubmit(controlId, types, method) {
  $("#" + controlId).ajaxSubmit();
}

function fileSelected(controlId, types, method) {
  
  var typeConfig = "";
  switch (types) {
    case "Image":
      typeConfig = "jpeg,jpg,png,gif,bmp";
      break;
    case "ImageTraining":
      typeConfig = "jpeg,jpg,png,gif,bmp";
      break;
    case "Attachment":
      typeConfig = "zip,rar,txt,doc,docx,xls,xlsx,ppt,pptx";
      break;
    default:
      typeConfig = "jpeg,jpg,png,gif,bmp,zip,rar,txt,doc,docx,xls,xlsx,ppt,pptx";
      break;
  }
  
  var target = document.getElementById(controlId);
  var files = target.files || [{name: target.value, size: 1000000}];
  var file = files[0];
  
  var fileName = file.name;
  var file_typename = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length);
  
  if (typeConfig.indexOf(file_typename) > -1) {//这里限定上传文件文件类型
    if (file) {
      var fileSize = 0;
      if (file.size > 1024 * 1024)
        fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + "MB";
      else
        fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + "KB";
      //document.getElementById(types + 'Message').innerHTML = '文件名: ' + file.name;
      if (method == "1") {
        uploadFile(controlId, types);
      }
      else {
        $("#uploadFile").show();
      }
    }
  }
  else {
    $("#uploadFile").hide();
    $("#" + types + "Message").show();
    document.getElementById(types + "Message").innerHTML = "<span style='color:Red'>文件后缀应为以下类型" + typeConfig + ",而不是" + file_typename + ",请重新选择文件</span>";
  }
  
}

function uploadFile(controlId, types) {
  
  $("#" + controlId).ajaxUpload({
    url: API_URL_ADMIN + "/Common/ToLead",
    // 其他表单数据
    data: {
      fileType: types
    },
    
    // 上传完成后, 返回json, text
    dataType: 'text',
    onSend: function (obj, str) {
      return true;
    },
    // 上传之后回调
    onComplate: function (data) {
      $("#hidValueImage").val(data).trigger("change");
      $("#hidFile").val(data).trigger("change");
      uploadComplete(data);
    }
  });
  
  
  //var fd = new FormData();
  //fd.append("fileToUpload", AddAntiForgeryToken(document.getElementById(controlId).files[0]));
  //fd.append("fileType", AddAntiForgeryToken(types));//上传的类型  Image：图片  Attachment：附件
  //var xhr = new XMLHttpRequest();
  //xhr.open("Post", API_URL + "/Page/ToLead",true);
  //xhr.upload.addEventListener("progress", uploadProgress, false);//进度条
  //xhr.addEventListener("load", uploadComplete, false);//服务器返回数据
  //xhr.addEventListener("error", uploadFailed, false);//上传出错
  //xhr.addEventListener("abort", uploadCanceled, false);//取消上传
  //xhr.onreadystatechange = function () {
  //    if (xhr.readyState == 4) {
  //        var json = eval("(" + xhr.responseText + ")");
  //        $("#hidFile").val(json.Value).trigger("change");
  //    }
  //};
  
  
  //if (document.location.protocol + "//" + document.location.host != API_URL.substring(0, API_URL.lastIndexOf('/'))) {
  //fd["enctype"] = "multipart/form-data";
  //xhr.setRequestHeader("Content-Type", false);// application/x-www-form-urlencoded;charset=UTF-8   application/json
  //    //xhr.setRequestHeader("Accept", '*/*');
  //}
  //xhr.withCredentials = true;
  //xhr.send(fd);
}

function uploadProgress(evt) {
  //if (evt.lengthComputable) {
  //    var percentComplete = Math.round(evt.loaded * 100 / evt.total);
  //    $("#progressNumber").progressbar("setValue", percentComplete);
  //}
  //else {
  //    document.getElementById("progressNumber").innerHTML = '无法计算';
  //}
}

function uploadComplete(evt) {
  /* 服务器返回数据*/
  var jsonTemp = evt;// eval("(" + evt.target.responseText + ")");
  //if (jsonTemp.Type == 1) {
  //    switch (jsonTemp.Message) {
  //        case "Image":
  //            $("#hidValueImage").val(jsonTemp.Value);
  //            $("#ImageMessage").show();
  //            $("#ImageMessage").html("图片上传成功");
  //            break;
  //        case "Attachment":
  //            $("#hidValueAttachment").val(jsonTemp.Value);
  //            $("#AttachmentMessage").show();
  //            $("#AttachmentMessage").html("文件上传成功");
  //            break;
  //    }
  //}
  //else {
  //    alert(jsonTemp.Message);
  //} -- 后台json直接返回上传文件名，以上方法暂时不用
  if (jsonTemp) {
    if ($("#hidValueImage")) {
      $("#hidValueImage").val(jsonTemp);
      $("#ImageMessage").html("图片上传成功");
      $("#ImageMessage").fadeIn();
      $("#ImageMessage").fadeOut(1000);
    }
    if ($("#hidValueAttachment")) {
      $("#hidValueAttachment").val(jsonTemp);
      $("#AttachmentMessage").html("文件上传成功");
      $("#AttachmentMessage").fadeIn();
      $("#AttachmentMessage").fadeOut(1000);
    }
  }
  else {
    alert(jsonTemp);
  }
}

function uploadFailed(evt) {
  alert("上传出错.");
}

function uploadCanceled(evt) {
  alert("上传已由用户或浏览器取消删除连接.");
}


(function ($) {
  var log = function (str) {
    if (window.console) {
    }
  };
  var frameCount = 0;
  var formName = "";
  var iframeObj = null;
  var colfile = null;
  //清空值
  function clean(target) {
    var file = $(target);
    var col = file.clone(true).val("");
    file.after(col);
    file.remove();
    //关键说明
    //先得到当前的对象和参数，接着进行克隆（同时克隆事件）
    //将克隆好的副本放在原先的之后，按照顺序逐个删除，最后初始化克隆的副本
  }
  
  function h5Submit(target, state) {
    var options = state.options;
    var fileObj = target[0].files[0];
    var fd = new FormData();//h5对象
    //附加参数
    for (var key in options.data) {
      fd.append(key, options.data[key]);
    }
    var fileName = target.attr('name');
    if (fileName === '' || fileName === undefined) {
      fileName = 'file';
    }
    fd.append(fileName, fileObj);
    $.ajax({
      url: options.url,
      type: "POST",
      data: fd,
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function (xhr) {
        xhr.progress = function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = Math.round(evt.loaded * 100 / evt.total);
            log(percentComplete + "%");
            if (options.onProgress) {
              options.onProgress(evt);
            }
          }
        };
      },
      processData: false,
      contentType: false,
      cache: false,
      success: function (data) {
        if ('json' == options.dataType) {
          var d = window.eval('(' + data + ')');
          options.onComplate(d);
        } else {
          options.onComplate(data);
        }
      },
      error: function () {
        alertMs("图片上传失败！");
        log("error");
      }
    })
    //异步上传
  }
  
  function ajaxSubmit(target, state) {
    var options = state.options;
    if (options.url === '' || options.url === null) {
      alert("无上传地址");
      return;
    }
    if ($(target).val() === '' || $(target).val() === null) {
      alert("请选择文件");
      return;
    }
    var canSend = options.onSend($(target), $(target).val());
    if (!canSend) {
      return;
    }
    /*判断是否可以用h5*/
    if (window.FormData) {
      //h5
      h5Submit(target, state);
    } else {
      /**/
      var form;
      if (iframeObj === null) {
        var frameName = 'upload_frame_' + (frameCount++);
        var iframe = $('<iframe style="position:absolute;top:-9999px" ><script type="text/javascript"></script></iframe>').attr('name', frameName);
        formName = 'form_' + frameName;
        form = $('<form method="post" name="' + formName + '" id="' + formName + '" style="display:none;" enctype="multipart/form-data" accept="text/html" />');
        form.attr("target", frameName).attr('action', options.url);
        var fileHtml = $(target).prop("outerHTML");
        colfile = $(target).clone(true);
        $(target).replaceWith(colfile);
        var formHtml = "";
        // form中增加数据域
        for (var key in options.data) {
          formHtml += '<input type="hidden" name="' + key + '" value="' + options.data[key] + '">';
        }
        form.append(formHtml);
        form.append(target);
        iframe.appendTo("body");
        form.appendTo("body");
        iframeObj = iframe;
      }
      //禁用
      $(colfile).attr("disabled", "disabled");
      form = $("form[name=" + formName + "]");
      //加载事件
      iframeObj.bind("load", function (e) {
        
        var contents = $(this).contents().get(0);
        var data = $(contents).find('body').text();
        if ('json' == options.dataType) {
          try {
            data = window.eval('(' + data + ')');
          }
          catch (Eobject) {
            log(Eobject);
            data = null;
          }
        }
        options.onComplate(data);
        iframeObj.remove();
        form.remove();
        iframeObj = null;
        // 启用
        $(colfile).removeAttr("disabled");
      });
      try {
        form.submit();
      } catch (Eobject) {
        log(Eobject);
      }
    }
  }
  
  //构造
  $.fn.ajaxUpload = function (options) {
    if (typeof options == "string") {
      return $.fn.ajaxUpload.methods[options](this);
    }
    options = options || {};
    var state = $.data(this, "upload");
    if (state)
      $.extend(state.options, options);
    else {
      state = $.data(this, "upload", {
        options: $.extend({}, $.fn.ajaxUpload.defaults, options)
      });
    }
    $.fn.ajaxUpload.methods.ajaxSubmit(this, state);
  };
  //方法
  $.fn.ajaxUpload.methods = {
    clean: function (jq) {//清空
      return jq.each(function () {
        clean(jq);
      });
    },
    ajaxSubmit: function (jq, state) {//提交
      return jq.each(function () {
        ajaxSubmit(jq, state);
      });
    },
    getFileVal: function (jq) {//获取值
      return jq.val();
    }
  };
  //默认项
  $.fn.ajaxUpload.defaults = $.extend({}, {
    url: '',
    dataType: 'json',
    data: {},
    onSend: function (obj, str) {
      return true;
    },
    onComplate: function (e) {
    },
    onProgress: function (e) {
    }
  });
})(jQuery);
