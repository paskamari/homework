/*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function(){
	"use strict";

	var
		i = 0,
		j = 0,
		rnd = function(a,b){
			return Math.floor(Math.random()*(b-a+1))+a;
		},
		randColor = function(h,s,l){
			return "hsl("+h+","+s+"%,"+l+"%)";
		},	
		train = document.querySelector('.train'),
		boxs = document.querySelectorAll('.train li'),
		btns = document.querySelectorAll('.showmenu li'),
		slide = function(n){

			var sum =0;

			for(var i = 0 ; i< tr ; i++){
			    for(var j = 0 ; j< td ; j++){
			    	
			    	if(n==sum){
			    		train.style.top=(-300*i)+'px';
						train.style.left=(-500*j)+'px';
			    	}
			    	sum++;
			    }
			}
			
	  	};

	var btnsWidth = Math.floor(940/td)-10;
	var btnsHeight = Math.floor(500/tr)-10;

	for(i=0;i<boxs.length;i++){
		var bgc = randColor(rnd(0,360),rnd(60,95),rnd(40,70));
		boxs.item(i).style.backgroundColor = bgc;
		btns.item(i).style.backgroundColor = bgc;
		btns.item(i).style.width = btnsWidth+"px";
		btns.item(i).style.height = btnsHeight+"px";
		(function(h){
		  	btns.item(h).onclick = function(){
		  		slide(h);
		  	};
		})(i);
	}

	train.style.width = (td*500)+"px";
	train.style.height = (tr*300)+"px";

})();