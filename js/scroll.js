$(document).ready(function() {
	$(window).bind('scroll',function(e){
		scrollChanges();
	});
});

function scrollChanges() {
	var scrolled = $(window).scrollTop();
	if (scrolled > 3000)
		$('#parallax-bg1').css('display', 'none');
	else
		$('#parallax-bg1').css('display', 'block');
}
