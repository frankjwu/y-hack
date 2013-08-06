$(document).ready(function() {
	$(window).bind('scroll',function(e){
		scrollChanges();
	});
});

function scrollChanges() {
	var scrolled = $(window).scrollTop();
	if (scrolled > 2400)
		$('#parallax-bg1').fadeOut(250);
	else
		$('#parallax-bg1').fadeIn(250);
}
