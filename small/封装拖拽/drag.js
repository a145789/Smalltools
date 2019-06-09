class Drag{
	constructor(tag,obj){
		tag.onmousedown = function(e){
			this.e = e || window.event;
			this.fndown(tag,obj);
		}.bind(this);
		obj.onmouseup = function (){
			obj.onmousemove = null;
		}
		this.arr = [];
	}
	fndown(tag,obj){
		this.offX = this.e.offsetX;
		this.offY = this.e.offsetY;
		obj.onmousemove = function(e){
			var e = e || window.event;
			tag.style.left = e.pageX - this.offX + 'px';
			tag.style.top = e.pageY - this.offY + 'px';
			var ach = {left : tag.style.left,top : tag.style.top}
			this.arr.push(ach);
			if(tag.offsetLeft <= 0){
				tag.style.left = 0;
			}else if(tag.offsetLeft >= (obj.clientWidth ? obj.clientWidth : obj.documentElement.clientWidth) - tag.offsetWidth){
				tag.style.left = (obj.clientWidth ? obj.clientWidth : obj.documentElement.clientWidth) - tag.offsetWidth + 'px';
			}
			if(tag.offsetTop <= 0){
				tag.style.top = 0;
			}else if(tag.offsetTop >= (obj.clientHeight ? obj.clientHeight : obj.documentElement.clientHeight) - tag.offsetHeight){
				tag.style.top = (obj.clientHeight ? obj.clientHeight : obj.documentElement.clientHeight) - tag.offsetHeight + 'px';
			}
		}.bind(this)
	}
}