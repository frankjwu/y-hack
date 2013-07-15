$(document).ready(function() {

  $(window).bind('scroll',function(e){
  	scrollChanges();
  });

  setInterval("blinkCursor()", 0);
});

function scrollChanges(){
	var scrolled = $(window).scrollTop();
	if (scrolled > 1750)
		$('#parallax-bg1').css('display', 'none');
	else
		$('#parallax-bg1').css('display', 'block');
}

function blinkCursor(){
	$('.cursor').fadeIn(600);
	$('.cursor').fadeOut(400);
}