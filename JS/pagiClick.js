$(document).ready(function() {
	$(".pagi1").click(function(){
		$(".pg1").css({ "background": "#000", "border-color": "#000"});
		$(".no1").css({ "display": "none"});
		$(".tick1").css({ "display": "unset"});
	});
	$(".pagi2").click(function(){
		$(".md1").css("display","unset");
		$(".pg2").css({ "background": "#000", "border-color": "#000"});
		$(".no2").css({ "display": "none"});
		$(".tick2").css({ "display": "unset"});
	});
	$(".pagi3").click(function(){
		$(".md2").css("display","unset");
		$(".pg3").css({ "background": "#000", "border-color": "#000"});
		$(".no3").css({ "display": "none"});
		$(".tick3").css({ "display": "unset"});
	});
	$(".pagi4").click(function(){
		$(".md3").css("display","unset");
		$(".pg4").css({ "background": "#000", "border-color": "#000"});
		$(".no4").css({ "display": "none"});
		$(".tick4").css({ "display": "unset"});
	});
});