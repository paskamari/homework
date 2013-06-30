/*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
"use strict";

var
	tr = '',
	td = '',
	promptTr = 	function(){
		tr = prompt('تعداد سطرها را وارد کنید بین 2 تا 5','3');
		if(tr == null || tr == ''){
			promptTr();
		}
		if(tr%2 == 0 || tr%2 == 1){
			if(tr >= 2 && tr <= 5){
				return tr;
			}else{
				alert('قوانین را رعایت کنید.');
				promptTr();
			}
		}else{
			alert('مگه نگفتم یه عدد وارد کن هاااا؟؟؟');
			promptTr();
		}
	},
	promptTd = 	function(){
		td = prompt('تعداد سطونها را وارد کنید بین 4 تا 10','5');
		if(td == null || td == ''){
			promptTd();
		}
		if(td%2 == 0 || td%2 == 1){
			if(td >= 4 && td <= 10){
				return td;
			}else{
				alert('قوانین را رعایت کنید.');
				promptTd();
			}
		}else{
			alert('مگه نگفتم یه عدد وارد کن هاااا؟؟؟');
			promptTd();
		}
	};
promptTd();
promptTr();