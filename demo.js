
//var box = 'Mr.Jason As 2017 slowly winds to a close, you may have noticed the sun beginning to set earlier and earlier, and you’re right! As the seasons begin to change, so too does the earth’s allocation of daylight.December 21st marks the 2017 winter solstice, as well as the first day of winter on the astronomical calendar. On this day, the tilt of the earth’s North Pole is at its farthest from the sun, resulting in the shortest day and the longest night of the calendar year.Though most refer to the solstice as an entire day, in reality, the solstice is defined as a single moment: when the sun is directly above the Tropic of Capricorn. This year, that moment will occur at 16:28 Coordinated Universal Time (UTC). After this point in time, periods of daylight will once again begin to grow longer.'

/*
var boxarr = [];
var pos = box.indexOf('the');
while (pos > -1){
	boxarr.push(pos);
	pos = box.indexOf('the', pos +1);
};
alert(boxarr);
alert(boxarr.length);


var boxarr = [];
boxarr = box.split(' ');
alert(boxarr.length);

var box2 = box.toUpperCase();
document.write(box2);





var num = 0;
var max = 5;
var bbb = null;

function box() {
	num++;
	document.getElementById('b').innerHTML += num;
	if (num == max) {
		clearInterval(bbb);
		setTimeout(function() {
			alert("5秒到了");
		}, 10);
	}
};

bbb = setInterval(box, 1000);



var num = 0;
var max = 5;
var bbb = null;

function box() {
	num++;
	document.getElementById('b').innerHTML += num;
	if (num == max) {
		setTimeout(function() {
			alert("5秒到了");
		}, 10);
	} else {
		setTimeout(box, 1000);
	}
};

setTimeout(box, 1000);




var num = 0;
var max = 5;
var bbb = null;

function box() {
	num++;
	document.getElementById('b').innerHTML = num;
	if (num == max) {
		setTimeout(function() {
			alert("5秒到了");
		}, 10);
	} else {
		setTimeout(box, 1000);
	}
};

setTimeout(box, 1000);




alert(BrowserDetect.browser);
alert(BrowserDetect.version);
alert(navigator.plugins.length);

for (var i = 0; i < navigator.plugins.length; i++) {
	document.getElementById('b').innerHTML += navigator.plugins[i].name +'<br />';
	//document.write(navigator.plugins[i].name + '<br />');
};




for (var i = 0; i < navigator.plugins.length; i++) {
	document.getElementById('b').innerHTML += navigator.plugins[i].name +'<br />';
	//document.write(navigator.plugins[i].name + '<br />');
};


function hasPlugin(pluginnames) {
	var pluginname = pluginnames.toLowerCase();
	for (var i = 0; i < navigator.plugins.length; i++) {
		if (navigator.plugins[i].name.toLowerCase().indexOf(pluginname) > -1) {
			return true;
		}
	return false;
	//alert(navigator.plugins[i].name.toLowerCase().indexOf(pluginname))
	}
};


alert(hasPlugin('java'));


//异步请求
window.addEventListener('load', function(){
	var b = document.getElementById('b');
	b.addEventListener('click', function(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange= function(){
			if (xhr.readyState == 4){
				if (xhr.status == 200){
					var ptime = document.getElementById('ptime');
					ptime.innerHTML += '<p>' + xhr.responseText + '</p>';
				}else {
					console.log('网页请求错误！ 状态代码：' + xhr.status + '状态信息：' + xhr.statusText);
				};
			};
		};
		xhr.open('get', 'demo.php?rand=' + Math.random(), true);
		xhr.send(null);
		
	});
});


*/


//GET请求
window.addEventListener('load', function(){
	var b = document.getElementById('b');
	b.addEventListener('click', function(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange= function(){
			if (xhr.readyState == 4){
				if (xhr.status == 200){
					var ptime = document.getElementById('ptime');
					ptime.innerHTML += '<p>' + xhr.responseText + '</p>';
				}else {
					console.log('网页请求错误！ 状态代码：' + xhr.status + '状态信息：' + xhr.statusText);
				};
			};
		};
		xhr.open('get', 'demo.php?rand=' + Math.random() + '&name=Lee', true);
		xhr.send(null);
		
	});
});

/*

 //1加到100
	 var p = 0;
	 for (var i = 1; i <= 100; i++){
	 	p += i;
	 };
	 document.write(p);


*/

//计算不同自赠数的和

function countAmount(start, end) {
	var amount = 0;
	for (var i = start; i <= end; i++){
		amount += i;
	};
	return amount;
};

//将结果输出到页面中

window.addEventListener('load', function(){
	var startcal = document.getElementById('startcal');
	startcal.addEventListener('click', function(){
		var start = document.getElementById("start").value;
		start = Number(start);
		//console.log(start);
		var end = document.getElementById("end").value;
		end = Number(end);
		//console.log(end);
		var total = document.getElementById('total');
		var totalamount = 0;
		if (end >= start){
			if(end - start >= 10000){
				total.innerHTML = '数值过大，电脑将会卡死！';
				return;
			} else {
				totalamount = countAmount(start,end);
				total.innerHTML = totalamount;
			}
		} else {
			total.innerHTML = '数值不合法，请重新输入';
			return;
		};
		
	});
});


























































































