	//定义一个定时器
//	var myTime = null;
	//定义一个函数获取时间

	var getTime = function(){
		var d = new Date();
		var str =toDstr(d);
		// var str =d.toLocaleTimeString()+" " + toDstr(d);
		document.getElementById("timeOn").innerHTML = str;
	}
	function toDstr(d1,sep) {
		if (sep == undefined){
			return d1.getFullYear()+"年"+(d1.getMonth()+1)+"月"+d1.getDate()+"日";
		}
		return d1.getFullYear()+sep+(d1.getMonth()+1)+sep+d1.getDate();
	}
	function showTime(){
		setInterval(getTime,1000);
	}
	window.onload = function(){
		showTime();
	}