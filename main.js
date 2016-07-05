require("./abc.css");
require("./bcd.less");
require("./src/css/swiper-3.3.1.min.css");
require("./src/css/animate.min.css");
	require("swiper");
	require("./src/js/swipe.min.js");
	

   var mySwiper = new Swiper ('.con_v', {
    		direction: 'horizontal',
    		
   	})
   
   
   var $=require("exports?$!./src/js/zepto.min.js");
   
   $(function(){
   	var flag=false;
   	$(".seven .btn .button").click(function(){
   		if(!flag){
   			$(".seven").css({"background":"url(images/light.jpg)","background-size":"100% 100%"})
   			$(this).css({"background":"url(images/closebj.jpg)","background-size":"100% 100%"});
   			flag=true;
   		}else{
   			$(".seven").css({"background":"url(images/fx1.jpg)"})
   			$(this).css({"background":"url(images/lightbj.jpg)","background-size":"100% 100%"});
   			flag=false;
   		}
})
   	var it=document.querySelector(".audio");
   	$(".pause").css("animation-name","rotate");
   	
   	it.ontimeupdate=function(e){
   		if(it.paused){
   			$(".music .pause").css("animation","");
   		}else{
   			$(".music .pause").css("animation-name","rotate");
   		}
   	}
   	
	$(".music .pause").click(function(){
		
		
		if(it.paused){
			it.play();
			$(this).css("animation-name","rotate")
		}else{
			it.pause();
			$(this).css("animation","");
		}
		
	})
   })




	


