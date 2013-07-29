$(document).ready(function() {
	setInterval("blinkCursor()", 0);
});

function blinkCursor() {
	$('.cursor').fadeIn(600);
	$('.cursor').fadeOut(400);
}
