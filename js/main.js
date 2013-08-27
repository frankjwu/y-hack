$(document).ready(function() {
	setInterval("blinkCursor()", 0);

	var hover = true;
	$('#link').hover(function() {
		if (hover)
			changeBG();
	})
});

function blinkCursor() {
	$('.cursor').fadeIn(600);
	$('.cursor').fadeOut(400);
}

function changeBG() {
	$('#bottom').css('background-image', 'url("/img/Yale3.jpg")');
	$('#bottom h1').text("Welcome to Y-Hack!");
	hover = false;
}