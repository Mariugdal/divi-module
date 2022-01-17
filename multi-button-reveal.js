<script>
jQuery(function($){
	var revealButtons = {
		'.rv_button_1': '.rv_element_1',
		'.rv_button_2': '.rv_element_2',
		'.rv_button_3': '.rv_element_3'
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