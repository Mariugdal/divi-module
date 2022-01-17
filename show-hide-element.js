<style>
body:not(.et-fb) .show-on-click, 
body:not(.et-fb) .toggle-on-click { 
	display: none; 
}
.et_pb_button.rv_button_opened:after { content:"\32"; }
.et_pb_button.rv_button_closed:after { content:"\33"; }
</style>
<script>
jQuery(function($){
	var buttons = {
		'.rv_button_1': {
			'toggle': '.toggle-on-click', 
			'hide'  : '.hide-on-click', 
			'show'  : '.show-on-click'
		}
	};
	$.each(buttons, function(button, elements) {
		$(button).click(function(e){
			e.preventDefault();
			$(elements.toggle).slideToggle();
			$(elements.show).slideDown();
			$(elements.hide).slideUp();
			$(button).toggleClass('rv_button_opened rv_button_closed');
		});
	});
});
</script>