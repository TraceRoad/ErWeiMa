var url=window.location.href;
var host=window.location.host
function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串
   	if (url.indexOf("?") !=-1){
		  if(url.indexOf("biz")!=-1||url.indexOf("stime")!=-1){
   			return true;
   		}
      if(url.indexOf('uuid')!=-1){
          return false;
      }
  	}else{
      if(url.indexOf('uuid')!=-1&&(url.indexOf("stime")!=-1||url.indexOf("biz")!=-1)){
          return true;
      }
  		return false;
  	}
}
//function jump_url(){
//	var a=GetRequest();
//	if(!a){
//		window.location.href ="http://"+host+"/ErWeiMa/desk_iframe.html?name="+encodeURIComponent(url)+"&time=1";
//	}
//}
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    var aSites= new Array(
            "TencentTraveler",
            "Baiduspider+",
            "Baiduspider-image",
            "Googlebot",
            "msnbot",
            "Sosospider",
            "iaskspider",
            "Sogou web spider",
            "Sogou Push spider",
            "Sogou Pic spider",
            "ia_archiver",
            "Yahoo! Slurp",
            "YoudaoBot",
            "Yahoo Slurp",
            "MSNBot",
            "BaiDuSpider",
            "Sogou Spider",
            "Speedy Spider",
            "Google AdSense",
            "Ask",
            "OutfoxBot/YodaoBot",
            "MSIECrawler"
         );
     for (var i=0;i<=aSites.length;i++){
        b=sUserAgent.match(aSites[i])==aSites[i];
        
        break;
      }
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM||b)){
       jump_url();
    }
}

browserRedirect();