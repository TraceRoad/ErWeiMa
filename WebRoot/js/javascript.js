// 企业Name 超过 header后 显示
function NameOverflowHeader() {
  var $t = $('.title');
  var t_w = $('.title_wrap');
  var t_h = $('.header_desc .title').height();
  var t_w_h = $('.title_wrap').height();
  var rest_h = t_h - t_w_h;
  var n_div = $('.name_overflow_div');
  var imgdiv = $('.imgdiv');
  var t_text = $('.title').text();

  TitleDdd();

  $('.title_wrap').on('click', function() {

    t_w.toggleClass('opened');
    if (t_w.hasClass('opened')) {
      t_w.trigger('destroy');
      imgdiv.addClass('imgdiv_overflow_initial');
      t_w.addClass('title_wrap_overflow_initial');
      n_div.css('height', rest_h);
      freelogo();
    } else {
      t_w.dotdotdot();
      imgdiv.removeClass('imgdiv_overflow_initial');
      t_w.removeClass('title_wrap_overflow_initial');
      n_div.css('height', '0');
      freelogo();
    }
    return false;

  });
};
function freelogo(){
  if($('.cli_support').length>0)
  {
    var height=$('#cli_content').height();
    var clientHeight=document.documentElement.clientHeight;
    if(height<clientHeight){
      $('body').css({'position':'relative','min-height':clientHeight+'px'});
      $('.cli_support').addClass('cli_support_a');
    }else{
      $('.cli_support').removeClass('cli_support_a');
    }
  }
}
function TitleDdd() {
  $('.title_wrap').each(function() {
    var w_h = $(this).height();
    var $t = $('.title');
    if ($t.outerHeight() > w_h) {
      $('.title_wrap').dotdotdot();
    };
  });
};
NameOverflowHeader();

// 企业码标题里不出现 换行符 br
function TitleNoBr() {
  var title = $('title').text();
  var new_title = title.replace(/<br [\/]>/g, "");

  $('title').text(new_title);

};
TitleNoBr();

var dh_num; /*导航的列*/
function dh_col(dh_num) {
  if (typeof dh_num == "undefined") {
    dh_num = 2;
  }
  $(".dm_contenter").each(function() {
    var w_w = document.documentElement.clientWidth;
    var w_w2 = $(this).parent().width();
    if (w_w2 < w_w) {
      w_w = w_w2;
    }
    var dm_span4_count = $(this).find('.dm_span4').length;
    var dm_row_num = Math.ceil(dm_span4_count / dh_num);
    var grid_h_h;
    if (dh_num == 2) {
      grid_h_h = 60;
    } else {
      grid_h_h = w_w / dh_num;
    }
    var grid_h = grid_h_h * dm_row_num;
    var dm_span4_w = (w_w - dh_num) / dh_num;
    $(this).css({
      "height": grid_h + "px",
      "margin-bottom": "15px"
    }).show();
    $(this).find(".dm_content").css({
      "height": grid_h + "px",
      "width": w_w + "px"
    }).show();
    $(".dm_contenter").parent(".tree_box").css("box-shadow", "none");
    $(".dm_span4").each(function() {
      $(this).css({
        "width": dm_span4_w + "px",
        "height": (grid_h_h - 1) + "px"
      }).show();

      var a = $(this).find(".dm_span4_div1");
      var b = $(this).find(".dm_span4_div2");
      $(this).find('img').autoSize(40, 40).show();
      if (dh_num == 2) {
        a.css({
          "height": "40px",
          "width": "40px",
          "display": "inline-block",
          "vertical-align": "middle",
          "margin-left": "10px",
          "margin-right": "10px"
        }).show();
        b.css({
          "display": "inline-block",
          "vertical-align": "middle",
          "height": "60px",
          "width": (parseInt(dm_span4_w) - 60) + "px"
        }).show();
        b.find("h2").css({
          "line-height": "60px"
        }).show();
      } else if (dh_num == 3 || dh_num == 4) {
        a.css({
          "height": 0.68 * dm_span4_w + "px",
          "width": dm_span4_w + "px",
          "vertical-align": "middle",
          "display": "table-cell"
        }).show();
        b.css({
          "height": 0.32 * dm_span4_w + "px",
          "text-align": "center"
        }).show();
        $(this).css("text-align", "center");
      } else if ( dh_num == 1 ) {   //一行一列
        $(this).parent("a").css('display','block');
        $(this).css({
          "width": "100%",
          "height": "auto",
          "display": "table-row"
        });
        $(this).parent().parent(".dm_content").css({
          "height": "auto",
          "width": "100%"
        });
        $(this).parent().parent().parent('.dm_contenter').css("height","auto");

        a.css({
          // "height": "auto",
          "width": "20%",
          "vertical-align": "middle",
          "display": "table-cell",
          "padding": "5px 0",
          "float": "left",
          "display": "table-cell"
        }).show();

        b.css({
          "height": "40px",
          "text-align": "left",
          "padding": "5px 0",
          "display": "table-cell",
          "vertical-align": "middle"
        });

        b.find("h2").css({
          "white-space": "normal",
          "vertical-align": "middle",
          "word-break": "break-all"
        });


        $(this).css("text-align", "center");
      }
    });
  });
}

function show_qr() {
  qr_wrap = document.getElementById("qr_wrap");
  if (qr_wrap.style.display == 'none') {
    qr_wrap.style.display = 'block';
  } else {
    qr_wrap.style.display = 'none';
  }

}

function show_face() {
  $('#mcover_vard_face').show();
  $('.vcard_biz_face_wrap,.vcard_biz_career').hide();
  $('.vcard_biz_head').css('min-height', '0');
}

function show_info() {
  $('#mcover_vard_face').hide();
  $('.vcard_biz_face_wrap,.vcard_biz_career').show();
  $('.vcard_biz_head').css('min-height', '250px');
}
$(function() {
  $(".halffold_text_sl").each(function(i) {
    var divH = $(this).height();
    var $p = $("p", $(this)).eq(0);
    while ($p.outerHeight() > divH) {
      $p.text($p.text().replace(/(s)*([a-zA-Z0-9]+|W)(...)?$/, "..."));
    };
  });
  var text = $('.desc');
  var tree = $('.tree_box');

  var resize_vcard_biz_face = function() {
    var vcard_face = $('#vcard_biz_face_img');
    var vcard_face_src = vcard_face.attr('src');
    var imgs = new Image();
    imgs.src = vcard_face_src;
    imgs.onload = function() {
      if (imgs.width > imgs.height) {
        var vcard_face_w = 120;
        var vcard_face_h = imgs.height * 120 / imgs.width;
        var vPosition = '0' + (vcard_face_w - vcard_face_h) / 2 + 'px';
      } else if (imgs.width < imgs.height) {
        var vcard_face_h = 120;
        var vcard_face_w = imgs.width * 120 / imgs.height;
        var vPosition = (vcard_face_h - vcard_face_w) / 2 + 'px' + ' 0';

      } else {
        var bgPosition = '0 0';
        var vcard_face_w = vcard_face_h = 120;
      }
      $('#vcard_biz_face_img_show').css({
        "background-image": "url(" + vcard_face_src + ")",
        "background-size": vcard_face_h + 'px ' + vcard_face_h + 'px',
        "background-position": vPosition,
        "background-repeat": 'no-repeat',
        "width": vcard_face_w + 'px',
        "height": vcard_face_h + 'px',
        "border-radius": '60px'

      });

    }
  }
  $(function() {
    /*离职背景判断*/
    var u = navigator.userAgent,
      app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android不支持模糊效果
    if (isAndroid) {
      $('#lizhibg').css('background', "rgba(1, 1, 1,0.82)");
    }

    if (($("#Ofold").length > 0)) {
      $("#Ofold").next().find(".tree_box_content").hide();
    }
    if ($('.vcard_biz_head').attr('databg')) {
      var image = new Image(),
        src = $('.vcard_biz_head').attr('databg');
      image.onload = function() {
        $('.vcard_biz_head').css({
          'background-image': 'url(' + src + ')'
        });
      }
      image.src = src;
    }
    var h = document.documentElement.clientHeight;
    $("#tools").css("display", "none");
    $(window).scroll(function() {
      var windowScrollTop = $(window).scrollTop();
      var oTools = $("#tools");
      if (windowScrollTop > 100) {
        oTools.fadeIn();
      } else {
        oTools.fadeOut();
      }
    });
    $(".scroll_top").css("bottom", 0.15 * h + "px");
    $(".scroll_top").click(function() {
      window.scrollTo(0, 0);
    });
    //resize_vcard_biz_face();
  });

  function show_content(obj) {
    $(obj).next().slideToggle('fast').css('overflow', 'initial');
    $(obj).toggleClass('show_content');
    $(obj).toggleClass('hider');
    $(obj).toggleClass('shower');
    if (typeof myscroll != 'undefined') {
      myscroll._resize();
    }
  }

  function show2_content(obj) {
    $(obj).parent().hide();
    $(obj).parent().next().slideToggle('fast').css('overflow', 'initial');
    if (typeof myscroll != 'undefined') {
      myscroll._resize();
    }
  }

  function show3_content(obj) {
    $(obj).parent().hide();
    $(obj).parent().prev().slideToggle('fast').css('overflow', 'initial');;
    $("html,body").animate({
      scrollTop: $(obj).parent().prev().offset().top
    }, 500);
    if (typeof myscroll != 'undefined') {
      myscroll._resize();
    }
  }

  function show4_content(obj) {
    $(obj).hide();
    $(obj).parent().next().slideToggle('fast');
    if (typeof myscroll != 'undefined') {
      myscroll._resize();
    }
  }

  function show5_content(obj) {
    $(obj).parent().hide();
    $(".reg_show_div1").show();
    $("html,body").animate({
      scrollTop: $(obj).parent().parent().offset().top
    }, 500);
    if (typeof myscroll != 'undefined') {
      myscroll._resize();
    }

  }

  function show6_content(obj) {
    if ($(obj).next().children().css('display') == 'none') {
      var height = $(window).height();
      var width = $(window).width();
      $(obj).removeClass('hider').addClass('shower');
      $(obj).next().children().css('display', 'block');
      var t = $(obj);
      var ul = t.next().find("ul");
      var li = ul.children("li");
      li.css("width", "100%");
      var firstimg = true;
      var realHeight;
      var width = document.body.clientWidth;
      var li_num = t.find(".li_img").length;
      li.each(function() {
        var img = new Image();
        var _t = $(this).find("img");
        $(this).css('width', width + 'px');
        var y_src = _t.attr('src');
        _t.attr('src', y_src + '?t=' + Math.random());
        $(this).find(".tit").css("width", width);
        img.onload = function() {
          var imgheight = _t.height();
          if (firstimg) {
            firstimg = false;
            realHeight = imgheight;
            ul.height(realHeight);
            ul.css("height", realHeight + "px");
            li.height(realHeight);
          }
          if (imgheight < realHeight) {
            realHeight = imgheight;
            ul.css("height", realHeight + "px");
            li.height(realHeight);
          }
        }
        img.src = _t.attr('src');
      });
    } else {
      $(obj).next().children().css('display', 'none');
      $(obj).removeClass('shower').addClass('hider');
    }
  }
  window.show_content = show_content;
  window.show2_content = show2_content;
  window.show3_content = show3_content;
  window.show4_content = show4_content;
  window.show5_content = show5_content;
  window.show6_content = show6_content;


  /*音频播放*/
  $('.audio_play_box').each(function(i) {
    var aud = $(this).find(".aud");
    $(this).find('.play').bind('click', function(evt) {
      /*填入音频地址*/
      if (aud.attr('src') == undefined) {
        aud.attr('src', aud.attr('data_src')).removeAttr('data_src');
      }
      if (aud[0].paused) {
        $('.audio_play_box').each(function() {
          $(this).find('audio')[0].pause();
          $(this).find(".audio").removeClass('audio_stop_btn').addClass('audio_play_btn');
        });
        evt.preventDefault();
        aud[0].play();
        $(this).find(".audio").removeClass('audio_play_btn').addClass('audio_stop_btn');
      } else if (aud[0].paused == false) {
        evt.preventDefault();
        aud[0].pause();
        $(this).find(".audio").removeClass('audio_stop_btn').addClass('audio_play_btn');
      }

    });
    /*添加监听，在播放结束时*/
    aud[0].addEventListener('ended', function(evt) {
      $(".audio").removeClass('audio_stop_btn').addClass('audio_play_btn');
    });
  });

  function stopBubble(e) {
    // 如果传入了事件对象，那么就是非ie浏览器  
    if (e && e.stopPropagation) {
      //因此它支持W3C的stopPropagation()方法  
      e.stopPropagation();
    } else {
      //否则我们使用ie的方法来取消事件冒泡  
      window.event.cancelBubble = true;
    }
  }

  /*防伪溯源提交和结果返回*/
  function afatra_submit(id, input_len) {
    var a_id = id;
    var input_name_str = 'afatra_input_' + id + '_';
    var param = new Array();
    for (var i = 0; i < input_len; i++) {
      var input = document.getElementById(input_name_str + i);
      param.push(input.name + '=' + input.value);
    }
    var param_str = param.join('&');

    $.post('/Afatra/query/id/' + a_id, param_str, function(response) {
      var resp = response;
      var resp_txt = '';
      if (resp.status != '' && resp.status !== undefined) {
        resp_txt = response.info;
      } else {
        r_len = resp.length;
        for (i = 0; i < r_len; i++) {
          resp_txt += '<p>' + resp[i].name + '：<span class="afatra_res_val">' + resp[i].vals + '</span></p>';
        }
      }
      var w_w = $(window).width();
      var w_h = $(window).height();
      var dialog_width = w_w - 30;
      var dialog_height = w_h - 40;
      var dialog_top = (w_h - dialog_height) / 2;
      var dialog_left = (w_w - dialog_width) / 2;

      document.getElementById("content_tree").innerHTML += '<div id="afatra_dialog" style="height:' + dialog_height + 'px;width:' + dialog_width + 'px;top:' + dialog_top + 'px;left:' + dialog_left + 'px"><div id="afatra_dialog_title" style="height: 32px; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1),0 1px 0 0 rgba(0, 0, 0, 0.1); font-size: 20px; text-align: center; background: #EBEBEB; padding: 10px; ">查询结果</div><div id="afatra_dialog_close"><a style="display: block;" href="javascript:forclose();"></a></div><div class="dialog_content">' + resp_txt + '</div><a href="javascript:forclose();" class="btn-orange btn" style="padding: 8px; display: block; width: 50%; margin: 0 auto; text-align: center;">关闭</a></div>';
    })
  }
});

function set_descr() {
  var descr_w = $(".desc_title  span").width();
  //alert(descr_w);
  var innertext2_w = $(".desc_title ").width();
  //alert(innertext2_w);
  if (descr_w > (innertext2_w - 12))
    $(".desc_title ").css("text-align", "left");
  else
    $(".desc_title ").css("text-align", "center");
}
set_descr();

$(window).load(function() {
  var w_w = $(window).width();
  //alert(w_w);
  $(".halffold_img").each(function() {
    var n = $(this);
    var halffold_img = n.find(".halffold_img_img");
    var halffold_img_h = halffold_img.height();
    var halffold_img_w = halffold_img.width();
    //  alert(halffold_img_h);
    //  alert(halffold_img_w);

    var h = w_w * halffold_img_h / halffold_img_w;
    var mt_w = -(h - 100) / 2;
    halffold_img.css({
      "width": "100%",
      "margin-top": mt_w
    });

    // alert("调试中");
  })
});


function set_halffold_text() {
  $(".halffold_text").each(function() {
    var m = $(this);
    var halffold_text_sl = m.find(".halffold_text_sl").text();
    str = halffold_text_sl.replace(/&lt;[^>].*?&gt;/g, "");
    m.find(".halffold_text_sl").html(str);
  })
}
set_halffold_text();

function no_header() {
  var halffold = $('.tree_box:first').find('.halffold');
  var tree_box_content = $('.tree_box:first').find('.tree_box_content');
  var tree_box_title = $('.tree_box:first').find('.tree_box_title');
  var no_title = $('.tree_box:first').find('.no_title');

  if (halffold) {
    halffold.css('margin-top', '0px');
    tree_box_content.css('margin-top', '0px');
  }
  if (tree_box_title) {
    tree_box_title.css('margin-top', '0px');
  }
  if (no_title) {
    no_title.css('margin-top', '0px');
  }
}
no_header();

/*轮播脚本*/
$(function() {
  $(".banner_img").each(function() {
    var t = $(this);
    var ul = t.children("ul");
    var li = ul.children("li");
    li.css("width", "100%");
    var firstimg = true;
    var realHeight;
    var width = document.body.clientWidth;
    var li_num = t.find(".li_img").length;
    li.each(function() {
      var img = new Image();
      var _t = $(this).find("img");
      $(this).find(".tit").css("width", width);
      img.onload = function() {
        var height = document.documentElement.clientHeight;
        var imgheight = _t.height();
        if (firstimg) {
          firstimg = false;
          realHeight = imgheight;
          ul.height(realHeight);
          ul.css("height", realHeight + "px");
          li.height(realHeight);
        }
        if (imgheight < realHeight) {
          realHeight = imgheight;
          ul.css("height", realHeight + "px");
          li.height(realHeight);
        }
      }
      img.src = _t.attr('src');
    });
    if (li_num > 1&&!t.hasClass('header_banner')) {
      t.unslider({
        dots: true, //  Display dot navigation
      });
      var dotsL = t.children(".dots").children("li").length;
      t.children(".dots").css("width", 20 * dotsL + "px");
      t.children(".dots").css("margin", "0 auto");
    } else {
      t.unslider({
        dots: false, //  Display dot navigation
      });
    }
  });
  var unslider = $('.banner').unslider({
    arrows: false,
    speed: 500, //  The speed to animate each slide (in milliseconds)
    delay: 3000, //  The delay between slide animations (in milliseconds)
    complete: function() {}, //  A function that gets called after every slide animation
    // keys: true,               //  Enable keyboard (left, right) arrow shortcuts
    fluid: true //  Support responsive design. May break non-responsive designs
  });
  if ($("#vcard_download").length > 0) { /*名片页的下载*/
    $("#cli_content").css("padding-bottom", "50px");
  }
  $(window).load(dh_col(dh_num));
  if ($(".banner").length > 0) {
    var t = $(".banner").find("img");
    t.each(function() {
      var t1 = $(this).parent("a");
      if (t1.attr("href") == "") {
        $(this).bind("click", function(event) {
          event.preventDefault();
        });
      }
    });
    jQuery('.banner ul')
      .on('movestart', function(e) {
        // If the movestart is heading off in an upwards or downwards
        // direction, prevent it so that the browser scrolls normally.
        if ((e.distX > e.distY && e.distX < -e.distY) ||
          (e.distX < e.distY && e.distX > -e.distY)) {
          e.preventDefault();
        }
      });
  }
  $(window).load(function(){      /*图片加载后需要草料二维码技术支持自适应*/
      freelogo();
  });


  /*维护记录展示*/
    //更多展示部分
  var record_spead_array; //其他记录展示
  $('.record_list').unbind('click').click(function(event){
    event.stopPropagation();
    if(!$(this).hasClass("record_spead_now")){
    $('.ui-list').find('.record_list').each(function(){
    if ($(this).hasClass('record_spead_now')) {
            $(this).find('.play_weixin_audio').each(function(){
    if($(this).attr('playing')==1){
      $(this).trigger('click');
    }
    });
        if($("#index").length>0){
      $("#index").remove();
      }
          $(this).find('.record_list_body_ct').css("display","none");
          $(this).css('background-color', '#fff').removeClass('padt10 record_spead_now').addClass('padtb10');
          $(this).find('.record_list_header').find('.record_list_header_bottom_spread').css('display', "inline-block");
        }
      })
      //手机端图片预览
      /*if($(this).find("a.preview").length>0){
        var myPhotoSwipe =$(this).find("a.preview").photoSwipe({ enableMouseWheel: false , enableKeyboard: false,preventDefaultTouchEvents:true});
      }*/
      $(this).find('.record_list_body_ct').css("display","block")
      $(this).find('.record_list_header').parent().css('background-color', '#f4f7fa').removeClass('padtb10').addClass('padt10 record_spead_now');
      $(this).find('.record_list_header_bottom_spread').css('display', "none");
      $(this).before('<i id="index" class="m_index"></i>');
      window.scrollTo(0,$("#index").offset().top);
    }else{
      $(this).find('.play_weixin_audio').each(function(){
        if($(this).attr('playing')==1){
          $(this).trigger('click');
        }
      });
      if($("#index").length>0){
    $("#index").remove();
    }
      $(this).find('.record_list_body_ct').css("display","none");
      $(this).find('.record_list_body_ct').parent().css('background-color', '#fff').removeClass('padt10 record_spead_now').addClass('padtb10');
      $(this).find('.record_list_header_bottom_spread').css('display', "inline-block");
    }
  });
  var uni_id=0,
      wu_id=data.wu_id||0;
  if (typeof data.record!="undefined") {
    uni_id=data.record.uni_id;
  }
  if($('#add_record1').length>0){
    $("#cli_content").css('padding-bottom','56px');
  }
  $('#load_record1').bind('click', function(event) {
    event.stopPropagation();
    var t = $(this),
    record_coding=$('.record_title_coding').attr('coding');
    window.location.href = "/pro/get_record_more_html?startnum=0&product_id=" + product_id+"&record_coding="+record_coding+"&wu_id="+wu_id+"&uni_id="+uni_id;
  });
  $('.record_ct_son_value').each(function(){
      var html=$(this).html().replace(/\n/g,"<br />");
      $(this).html(html);
  });
  $('#apply-whper').bind('click',function(){
    if(!open_id){
      alert("请在微信端申请");
      return false;
    }
    window.location.href="/sonuser/reg/apply?product_id="+product_id+"&open_id="+open_id;
  });
  var add_record_btn_sucess=false;//判断用户是不是已经请求模板
  $('#add_record1').bind('click', function() {
    var _datalist = '';
    // if(!!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)){
    //   alert('请在手机端添加');
    // }
    if (add_record_btn_sucess) {
      return false;
    }
    $.post('/pro/get_record_list_by_productid', {
      product_id: product_id
    }, function(ret) {
      if (ret.status == 1 && !!ret.data) {
        if (ret.data.count == 1) {
          var id = ret.data[0]['record_template_id'];
          var back = window.location.href;
          var form = '<form action="/pro/dumptoform"><input type="hidden" name="id" value="' + id + '" /><input type="hidden" name="wu_id" value="' + wu_id + '" /><input type="hidden" name="uni_id" value="' + uni_id + '" /><input type="hidden" name="back" value="' + back + '" /><input type="hidden" name="product_id" value="' + product_id + '" /><input type="hidden" name="user_type" value="' + ret.data['user_type'] + '"></form>';
          $(form).appendTo($('body')).submit();
          return;
        }
        $('.ui-actionsheet').addClass('show').css("margin-top","0px");
        var return_data = ret.data;
        _datalist += '<div class="select_template_btn_groups" id="select_template_btn_groups"><div id="select_template_btn_groups_c">';
        for (var i in return_data) {
          if (typeof(return_data[i]) == "object") {
            _datalist += '<button class="select_template_btn" value="' + return_data[i]['record_template_id'] + '">' + return_data[i]['name'] + '</button>';
          }
        }
        _datalist += '</div></div><button class="ui-cancel">取消</button>';
        $('.ui-actionsheet-cnt').html('').append(_datalist);
        add_record_btn_sucess = true; //判断用户是不是已经请求模板
        var record_slider = new template_touch('#select_template_btn_groups_c');
        record_slider.init();
        $('.ui-actionsheet-cnt').find('.ui-cancel').bind('click', function() {
          $('.ui-actionsheet').removeClass('show');
          $('body').unbind('touchmove');
          add_record_btn_sucess = false;
        });
        $('.ui-actionsheet-cnt').find('button.select_template_btn').bind('click', function() {
          var id = $(this).attr('value');
          var back = window.location.href;
          var form = '<form action="/pro/dumptoform"><input type="hidden" name="id" value="' + id + '" /><input type="hidden" name="wu_id" value="' + wu_id + '" /><input type="hidden" name="uni_id" value="' + uni_id + '" /><input type="hidden" name="back" value="' + back + '" /><input type="hidden" name="product_id" value="' + product_id + '" /><input type="hidden" name="user_type" value="' + ret.data['user_type'] + '"></form>';
          $(form).appendTo($('body')).submit();

        });
      } else if (ret.status == 1 && !ret.data) {
        alert("你没有添加记录权限，请联系管理员");
        $('.loading_tips,.fix_bg').remove();
      } else if (ret.status == -1) {
        alert(ret.info);
        $('.loading_tips,.fix_bg').remove();
      } else if (ret.status == -2) {
      }
    });
  });
});