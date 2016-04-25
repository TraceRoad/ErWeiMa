function setCookie(value) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = "message_add_sucess" + "=" + (parseInt(value) + 1) + ";expires=" + exp.toGMTString();
}

function getCookie(cookieName) {
  var strCookie = document.cookie;
  var arrCookie = strCookie.split("; ");
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split("=");
    if (cookieName == arr[0]) {
      return arr[1];
    }
  }
  return 0;
}
/*留言*/
$(function() {
  var wu_id=data['wu_id'];
  var str=location.href; //取得整个地址栏
  var coding_id = '',
    pd = true;
  $(".mes_submit").click(function() {
    if(str.indexOf('is_preview')!=-1){
      $(".mes_submit").css("disabled","disabled");
      alert('预览界面无法使用，仅供手机端使用');
      return false;
    }
    var _this = $(this);
    var data = {};
    var _this = $(this).prev('form');
    coding_id = _this.find(".coding_id").val(),
      is_add_sucess = getCookie('message_add_sucess');
    phonenum = _this.find(".phonenum").val();
    var _this = $(this).prev('form');
    var content = _this.find(".content").val();
    user_id = _this.find(".user_id").val(),
      mes_title = _this.find(".mes_title").val();
    qrcode_coding = _this.find(".qrcode_coding").val();
    reg = !!phonenum.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
    if (phonenum == "") {
      alert('请输入手机号');
      //checkone = false;
      _this.find(".phonenum").focus().val('');
      return false;
    } else if (content == "") {
      //checkone = false;
      _this.find(".content").focus().val('');
      alert('请输入留言内容');
      return false;
    } else if (reg == false) {
      //checkone = false;
      alert('请输入正确的手机号');
      _this.find(".phonenum").focus().val('');
      return false;
    }
    if (!pd) {
      alert("数据正在提交中，请勿重复操作！");
      return;
    }
    pd = false;
    data['content'] = content;
    data['phonenum'] = phonenum;
    data['coding_id'] = coding_id;
    data['user_id'] = user_id;
    data['mes_title'] = mes_title;
    data['qrcode_coding'] = qrcode_coding;
    data['wu_id']=wu_id;
    // if(_this.hasClass('checked')){
    //    alert("数据正在提交中请勿重复操作！");
    //    return ;
    // }else{
    //   _this.addClass('checked');
    // }
    if (is_add_sucess < 5) {
      $.post('/pro/message_add', data, function(ret) {
        pd = true;
        if (ret.status == 1) {
          $('.mes_sucess_f').css("display","block");
          setCookie(is_add_sucess);
        } else {
          alert('留言失败');
        }
      }, 'json');
    } else {
      setTimeout(function() {
        $.post('/pro/message_add', data, function(ret) {
          pd = true;
          if (ret.status == 1) {
            $('.mes_sucess_f').css("display","block");
            setCookie(is_add_sucess);
          } else {
            alert('留言失败');
          }
        }, 'json');
      }, 1000);
    }
  });
  $('.mes_again').click(function(){
    $('.mes_sucess_f').css("display","none");
    $('.phonenum').attr("value","");
    $('.mes_cont_input').find('textarea').attr("value","");
  })
});