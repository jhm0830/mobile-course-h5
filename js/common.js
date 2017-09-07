/*$("body").on("touchstart",function(e){
e.preventDefault();
	startX=e.originalEvent.changedTouches[0].pageX;
	startY=e.originalEvent.changedTouches[0].pageY;
});
$("body").on("touchmove",function(e){
e.preventDefault();
	moveEndX=e.originalEvent.changedTouches[0].pageX;
	moveEndY=e.originalEvent.changedTouches[0].pageY;
	X=moveEndX-startX;
	Y=moveEndY-startY;
	 if( Math.abs(X) > Math.abs(Y) && X>0){
	 	alert("左向右")
  }
  else if(Math.abs(X) > Math.abs(Y) && X<0){

  }
  else if(Math.abs(Y) >Math.abs(Y) && Y>0){

  }
  else if(Math.abs(Y) > Math.abs(Y) && Y<0){

  }
  else{

  }
});*/
//移动端自适应大小rem计算方式： 实际尺寸（rem）=所量尺寸（px）÷100
var Dpr=1, uAgent=window.navigator.userAgent;
        var isIOS=uAgent.match(/iphone/i),isYIXIN = uAgent.match(/yixin/i),is2345 = uAgent.match(/Mb2345/i),ishaosou = uAgent.match(/mso_app/i),isSogou = uAgent.match(/sogoumobilebrowser/ig),isLiebao = uAgent.match(/liebaofast/i),isGnbr = uAgent.match(/GNBR/i);
        function resizeRoot(){
            var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth, wDpr, wFsize;
            var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight;
            if (window.devicePixelRatio) {
                wDpr = window.devicePixelRatio;
            } else {
                wDpr = isIOS ? wWidth > 818 ? 3 : wWidth > 480 ? 2 : 1 : 1;
            }
            if(isIOS) {
                wWidth = screen.width;
                wHeight = screen.height;
            }
            if(wWidth > wHeight){
                wWidth = wHeight;
            }
            wFsize = wWidth > 1080 ? 144 : wWidth / 6.4;
            wFsize = wFsize > 32 ? wFsize : 32;
            window.screenWidth_ = wWidth;
            if(isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr){
                setTimeout(function(){
                    wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth;
                    wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight;
                    wFsize = wWidth > 1080 ? 144 : wWidth / 6.4;
                    wFsize = wFsize > 32 ? wFsize : 32;
                    document.getElementsByTagName('html')[0].style.fontSize = wFsize*2 + 'px';
                },500);
            }else{
                document.getElementsByTagName('html')[0].style.fontSize = wFsize*2 + 'px';
            }
        }
        resizeRoot();
