/*create by Hiken 2015-09-28*/
/**/

$(function(){
	$(".head_1").hover(function(){
		//鼠标移到“语音识别技术”时
		$(".content_1").show();
		$(".content_2").hide();
		$(".content_3").hide();
		$(".head_1 span").removeClass("img_4").addClass("img_1");
		$(".head_1 div").removeClass("height_48").addClass("height_56");
		$(".head_2 span").removeClass("img_2").addClass("img_5");
		$(".head_2 div").removeClass("height_56").addClass("height_48");
		$(".head_3 span").removeClass("img_3").addClass("img_6");
		$(".head_3 div").removeClass("height_56").addClass("height_48");
		$(".dataWord_2").css("margin-top","90px");
		$(".dataWord_3").css("margin-top","44px");
		$(".dataWord").removeClass("bgLine_2").addClass("bgLine_1");
	});
	$(".head_2").hover(function(){
		//鼠标移到“业界领先的识别技术”时
		$(".content_2").show();
		$(".content_1").hide();
		$(".content_3").hide();
		$(".head_1 span").removeClass("img_1").addClass("img_4");
		$(".head_1 div").removeClass("height_56").addClass("height_48");
		$(".head_2 span").removeClass("img_5").addClass("img_2");
		$(".head_2 div").removeClass("height_48").addClass("height_56");
		$(".head_3 span").removeClass("img_3").addClass("img_6");
		$(".head_3 div").removeClass("height_56").addClass("height_48");
		$(".dataWord_2").css("margin-top","60px");
		$(".dataWord_3").css("margin-top","116px");
		$(".dataWord").removeClass("bgLine_2").addClass("bgLine_1");
	});
	$(".head_3").hover(function(){
		//鼠标移到“专注优化领域识别”时
		$(".content_3").show();
		$(".content_1").hide();
		$(".content_2").hide();
		$(".head_1 span").removeClass("img_1").addClass("img_4");
		$(".head_1 div").removeClass("height_56").addClass("height_48");
		$(".head_2 span").removeClass("img_2").addClass("img_5");
		$(".head_2 div").removeClass("height_56").addClass("height_48");
		$(".head_3 span").removeClass("img_6").addClass("img_3");
		$(".head_3 div").removeClass("height_48").addClass("height_56");
		$(".dataWord_2").css("margin-top","50px");
		$(".dataWord_3").css("margin-top","100px");
		$(".dataWord").removeClass("bgLine_1").addClass("bgLine_2");
	});
});