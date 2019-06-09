function rightMenu(obj){
	obj.oncontextmenu = function(evt){
		var e = evt || window.event;
		obj.style.display = 'block';
		obj.style.left = offsetX + 'px';
		obj.style.top  = offsetY + 'px';
		return false;
	}
	document.onclick = function (){
		obj.style.display = 'none'
	}
}
