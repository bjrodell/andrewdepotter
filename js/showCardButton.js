$(document).ready(function() {
	$( ".page-content .card" ).mouseover(function() {
		$(this).find('.btn').removeClass('d-none');
		$(this).find('.btn').addClass('fadeInRight');
	});
});