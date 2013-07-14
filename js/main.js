$(document).ready(function() {

  $(window).bind('scroll',function(e){
  	parallaxScroll();
  });

  setInterval("blinkCursor()", 0);
});

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	//$('#parallax-bg2').css('top',(0-(scrolled*.75))+'px');
	if (scrolled > 1750)
		$('#parallax-bg1').css('display', 'none');
	else
		$('#parallax-bg1').css('display', 'block');
}

function blinkCursor(){
	$('.cursor').fadeIn(600);
	$('.cursor').fadeOut(400);
}