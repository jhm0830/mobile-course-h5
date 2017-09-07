var CourseTitle=document.getElementById('coursetitle');
var Vid=document.getElementById('video');
var Nav=document.getElementById('nav');
var Cul=Nav.getElementsByTagName("ul")[0];
var tabLi = Cul.getElementsByTagName('li');
var Prev=document.getElementById('prev');
var Next=document.getElementById('next');
var navListV=document.getElementById('nav_list_v');
var Vul=navListV.getElementsByTagName("ul")[0];
var navListT=document.getElementById("nav_list_t");

var tar = 0;
var endX = 0;
var dist = 0;
//初始化
var StrPath = location.href;
var bool = StrPath.indexOf("http");

var bMenu=true;
var iMax=0;
var kcjsarra = new Array();
var kcjsarrb = new Array();

//loadlist();
//loaddowmlist();

CourseTitle.innerHTML=sCourseTitle;

//视频播放器


//课程结构栏目生成
for( i=0; i<=arrkcjs.length-1; i++){
	Cul.innerHTML +="<li>"+arrkcjs[i]+"</li>"
}
Cul.style.width=0.55*tabLi.length+"rem";
//课程视频目录
for(j=0; j<=vidName.length-1; j++){
	Vul.innerHTML +="<li><span class='icon_v glyphicon glyphicon-facetime-video'></span>"+(j+1)+"."+vidName[j]+"<span class='duration'>学习</span></li>";
}
//课程文本内容
//navListT.innerHTML=kcjs;

//视频播放
var Vli=Vul.getElementsByTagName("li");
/*Vli.onclick=function(){
 	if(){

 	}	
 	else if(){

 	}
}*/

