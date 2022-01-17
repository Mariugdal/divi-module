<script>
jQuery(function($){
	var revealButtons = {
		'.rv_button_1': '.rv_element_1'
	};
	$.each(revealButtons, function(revealButton, revealElement) {
		$(revealButton).click(function(e){
			e.preventDefault();
			$(revealElement).slideToggle();
			$(revealButton).toggleClass('rv_button_opened rv_button_closed');
		});
	});
});
</script>