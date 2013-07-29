$(document).ready(function() {
	setInterval("blinkCursor()", 0);
	var screensize = $(document).width();
	if (screensize < 1000)
		$("#big-y").hide();
});

function blinkCursor() {
	$('.cursor').fadeIn(600);
	$('.cursor').fadeOut(400);
}
