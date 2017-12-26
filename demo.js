
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


*/

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


























