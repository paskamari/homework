// JQUERY Document

$(document).ready(function() {

	$('.showmenu').stop().animate({'opacity':'1'},1500);

	$('.showmenu li').click(function(){
		$('.nonepage').css({"display":"block"});
		$('.blockpage').css({"display":"block"});
		$('.container').stop().animate({"opacity":1},1200);
	});

	$('.btnclose').click(function(){
		$('.container').stop().animate({"opacity":0},900,function(){
			$('.nonepage').css({"display":"none"});
			$('.blockpage').css({"display":"none"});
		});
	});

	var
		LT,LTnopx,a,b;
	

  	$('.leftCenter').click(function(){
  		LT = $('.train').css('left');
  		LTnopx = LT.substring(0,LT.length-2);
  		a =LTnopx/-500;
  		if(a>td-2){
  			a=-1;
  			b = -500*(a+1);
  			$('.train').stop().animate({'left':b+'px'},800);
  		}else{
  			b = -500*(a+1);
  			$('.train').stop().animate({'left':b+'px'},800);
  		}
	});

	$('.rightCenter').click(function(){
  		LT = $('.train').css('left');
  		LTnopx = LT.substring(0,LT.length-2);
  		a =LTnopx/-500;
  		if(a<1){
  			a=td;
  			b = -500*(a-1);
  			$('.train').stop().animate({'left':b+'px'},800);
  		}else{
  			b = -500*(a-1);
  			$('.train').stop().animate({'left':b+'px'},800);
  		}
	});

	$('.topCenter').click(function(){
  		LT = $('.train').css('top');
  		LTnopx = LT.substring(0,LT.length-2);
  		a =LTnopx/-300;
  		if(a>tr-2){
  			a=-1;
  			b = -300*(a+1);
  			$('.train').stop().animate({'top':b+'px'},800);
  		}else{
  			b = -300*(a+1);
  			$('.train').stop().animate({'top':b+'px'},800);
  		}
	});

	$('.bottomCenter').click(function(){
  		LT = $('.train').css('top');
  		LTnopx = LT.substring(0,LT.length-2);
  		a =LTnopx/-300;
  		if(a<1){
  			a=tr;
  			b = -300*(a-1);
  			$('.train').stop().animate({'top':b+'px'},800);
  		}else{
  			b = -300*(a-1);
  			$('.train').stop().animate({'top':b+'px'},800);
  		}
	});
	
});