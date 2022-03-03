function z() {
	var bv = document.documentElement.clientWidth;
	if(bv > 680) {
		bv = 680;
	}
	if(bv<320){
		bv=320;
	}
	var b = document.documentElement.style.fontSize = bv / 680 * 100 + "px";
	console.log(b);
}
window.onload = function() {
	z();
}
window.onresize = function() {
	z();
}