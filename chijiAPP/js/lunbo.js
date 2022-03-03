//因为使用了document，所以js需要放在需要执行的代码下面生效才能生效
var li = document.getElementById('lunbo').getElementsByTagName("li");
var num = 0;
var len = li.length;

setInterval(function() {
	li[num].style.display = "none";
	num = ++num == len ? 0 : num;
	li[num].style.display = "inline-block";

}, 3000); //切换时间
