(function(){
    $(".rich_text").each(function(){//�Ա�ǩ���б���
        var richTextImg =$(this).find('img');
        if(richTextImg.length > 0) {
            for(var j=0;j<richTextImg.length;j++) {
                var OneImg=richTextImg.eq(j);
                if(OneImg.parent().get(0).tagName!='A'){
                    OneImg.click(function(){
                        window.open("/unit/img?img="+this.src);
                    });
                }
            }
        }
    });
})();