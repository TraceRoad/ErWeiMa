(function($){
	function autoSize(obj,w,h,is){ //is=true ²»ÒÆÎ»
		var oIMG = new Image();
		oIMG.onload = function(){
			var oW=this.width;
			var oH=this.height;
			var tax=1;
			if(oW>w||oH>h) tax=(oW/oH) > (w/h)?(w/oW):(h/oH);
			if(!is){
				obj.style.marginLeft=(w-Math.floor(oW*tax))/2+"px";
				obj.style.marginTop =(h-Math.floor(oH*tax))/2+"px";
			}
			var owt = oW*tax;
			var oht = oH*tax;
			obj.width = owt;
			obj.height = oht;
			obj.style.width = owt+"px";
			obj.style.height = oht+"px";
		};
		oIMG.src=obj.src;
	}
	$.fn.autoSize = function(width,height,is_move){
		this.each(function(i){
				return autoSize(this,width,height,is_move);
		});
		return this;
	};
})(jQuery);