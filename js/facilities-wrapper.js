Y.use("jquery-noconflict", function(Y) {
	jQuery(function(){
		// Prevent ticket event date links from going anywhere
		jQuery('.lo-CalendarDateValue a').click(function(e){
			e.preventDefault();
		});
	});
});