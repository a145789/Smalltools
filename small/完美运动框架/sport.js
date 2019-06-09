function getStyle(obj,attr){
	return window.getComputedStyle ? getComputedStyle(obj,1)[attr] : obj.currentStyle[attr];
}
function sport(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		for(let attr in json){
			var stop = true;
			var curr = attr === "opacity" ? parseInt(parseFloat(getStyle(obj,attr))*100) : parseInt(getStyle(obj,attr));
			var speed = (json[attr] - curr ) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if( curr != json[attr]){
				stop = false;
			}
			if(attr == 'opacity'){
				obj.style[attr] = (curr + speed) / 100 ;
				obj.style.filter = 'alpha(opacity=' + (curr + speed) + ')';
			}
			else
				obj.style[attr] = (curr + speed) + 'px';
		}
		if(stop){
			clearInterval(obj.timer);
			if(typeof fn == 'function')
				fn();
		}
		
	},30)
}